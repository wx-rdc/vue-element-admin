<template>
  <div class="app-container">
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px">
      <el-form :inline="true">
        <el-form-item>
          <el-select v-model="value" clearable placeholder="状态">
            <el-option
              v-for="item in status"
              :key="item.statusId"
              :label="item.label"
              :value="item.statusId"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="姓名" v-model="searchName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="doFilter()"
            ><i class="el-icon-search"></i>搜索</el-button
          >
        </el-form-item>
        <el-form-item>
          <el-button type="primary">新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <!--列表-->
    <!-- <el-table
      :data="tableList"
      v-loading="listLoading"
      border
      element-loading-text="拼命加载中"
      style="width: 100%"
    >
      <el-table-column prop="uid" label="序号" width="65"> </el-table-column>
      <el-table-column prop="cname" label="姓名"> </el-table-column>
      <el-table-column prop="title" min-width="150px" label="标题">
      </el-table-column>
      <el-table-column prop="number" label="阅读数" width="65">
      </el-table-column>
      <el-table-column prop="date" label="时间" width="110px">
      </el-table-column>
      <el-table-column label="状态" width="120">
        <template slot-scope="scope">
          <el-tag
            size="small"
            :type="scope.row.status | statusFilter"
            @click="isStatus(scope.$index, scope.row)"
            v-if="scope.row.status == 1"
            >启用</el-tag
          >
          <el-tag
            size="small"
            :type="scope.row.status | statusFilter"
            @click="isStatus(scope.$index, scope.row)"
            v-if="scope.row.status == 2"
            >禁用</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="operation" label="操作 ">
        <template slot-scope="scope">
          <el-button
            size="small"
            type="primary"
            @click="handleUpdate(scope.row)"
            >编辑</el-button
          >
          <el-button
            v-if="scope.row.status != '2'"
            size="mini"
            type="success"
            @click="handleModifyStatus(scope.row, '2')"
            >启用
          </el-button>
          <el-button
            v-if="scope.row.status != '1'"
            size="mini"
            @click="handleModifyStatus(scope.row, '1')"
            >禁用
          </el-button>
          <el-button size="small" type="danger" @click="deleteUpdate(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table> -->

    <el-table
      size="mini"
      highlight-current-row
      border
      v-loading="listLoading"
      :data="tableList"
      element-loading-text="拼命加载中"
      style="width: 100%"
    >
      <el-table-column label="编号" align="center" prop="id"></el-table-column>
      <el-table-column
        label="商品名称"
        min-width="120"
        align="center"
        prop="name"
      ></el-table-column>
      <el-table-column
        label="店铺名称"
        min-width="120"
        align="center"
        prop="shop"
      ></el-table-column>
      <el-table-column
        label="商家地址"
        min-width="200"
        align="center"
        prop="address"
      ></el-table-column>
      <el-table-column label="商品种类" min-width="80" align="center">
        <template slot-scope="scope">
          <el-tag
            size="mini"
            :type="scope.row.category === '零食' ? 'info' : 'warning'"
            >{{ scope.row.category }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="商品描述"
        min-width="220"
        align="center"
        prop="desc"
        show-overflow-tooltip
      ></el-table-column>
      <!--操作-->
      <el-table-column fixed="right" label="操作" width="100" align="center">
        <template slot-scope="scope">
          <div class="operation">
            <el-button size="mini" plain @click="handleUpdate(scope.row)"
              >编 辑</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>

    <!--工具条-->
    <el-pagination
      layout="total, prev, pager, next"
      background
      :page-size="10"
      @size-change="handleSizeChange"
      :total="total"
      @current-change="handleCurrentChange"
      style="text-align: center; margin-top: 20px"
    >
    </el-pagination>

    <!-- 新增编辑院校 -->
    <el-dialog title="Edit" :visible.sync="isShowEditVisible">
      <el-form label-width="80px" :model="temp" ref="dataForm">
        <el-form-item label="姓名" prop="cname">
          <el-input v-model="temp.cname"></el-input>
        </el-form-item>
        <el-form-item label="时间" prop="date">
          <el-input v-model="temp.date"></el-input>
        </el-form-item>
        <el-form-item label="状态" v-model="temp.status">
          <el-select v-model="temp.status" placeholder="启用状态">
            <el-option
              v-for="item in status"
              :label="item.label"
              :value="item.statusId"
              :key="item.statusId"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShowEditVisible = false">取消</el-button>
        <el-button
          type="primary"
          :loading="listLoading"
          @click="updateData"
          class="title1"
          >确定</el-button
        >
      </div>
    </el-dialog>

    <!-- 删除弹框 -->
    <el-dialog title="删除" :visible.sync="deleteVisible" width="30%">
      <span>确认删除吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitDelete">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { commonMixin } from "@/common/mixin.js";
import { getShopList, updateShop } from "@/api/shop";
export default {
  name: "Table",
  mixins: [commonMixin],
  data() {
    return {
      tableList: [],
      listLoading: true,
      isShowEditVisible: false,
      deleteVisible: false,
      temp: {
        uid: "",
        cname: "",
        date: "",
        status: "",
      },
      total: 0,
      page: 1,
      pageSize: 10,
      status: [
        {
          statusId: 1,
          label: "启用",
        },
        {
          statusId: 0,
          label: "禁用",
        },
      ],
      value: "",
      searchName: "",
      filterTableDataEnd: [],
    };
  },
  created() {
    this.fetchData();
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        1: "success",
        2: "danger",
      };
      return statusMap[status];
    },
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getShopList(this.listQuery).then((response) => {
        const limit = 10;
        const pageList = response.data.rows;
        console.log(pageList);
        this.total = response.data.total;
        this.tableList = pageList;
        this.listLoading = false;
      });
    },
    doFilter() {
      if (this.searchName === "") {
        this.fetchData();
        // this.$message.warning('查询条件不能为空！')
        return;
      }
      console.log(this.searchName);
      // 每次手动将数据置空,因为会出现多次点击搜索情况
      this.filterTableDataEnd = [];
      this.tableList.forEach((value, index) => {
        if (value.cname) {
          if (value.cname.indexOf(this.searchName) >= 0) {
            this.filterTableDataEnd.push(value);
            console.log(this.filterTableDataEnd);
          }
        }
      });
      // 页面数据改变重新统计数据数量和当前页
      this.page = 1;
      this.total = this.filterTableDataEnd.length;
      // 渲染表格,根据值
      this.currentChangePage(this.filterTableDataEnd);
    },
    clickfun(e) {
      console.log(e.target.innerText);
    },
    handleUpdate(row) {
      this.isShowEditVisible = true;
      this.temp = Object.assign({}, row);
      console.log(row);
    },
    deleteUpdate(row) {
      console.log(row);
      this.deleteVisible = true;
      this.temp = Object.assign({}, row);
      // console.log(row)
    },
    submitDelete() {
      const tempData = Object.assign({}, this.temp);
      console.log(tempData);
      console.log(this.tableList);
      for (const v of this.tableList) {
        if (v.uid === this.temp.uid) {
          const index = this.tableList.indexOf(v);
          this.tableList.splice(index, 1);
          this.fetchData();
          console.log(this.tableList);
          break;
        }
      }
      this.deleteVisible = false;
      this.$notify({
        title: "成功",
        message: "删除成功",
        type: "success",
        duration: 2000,
      });
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: "操作成功",
        type: "success",
      });
      console.log(row);
      row.status = status;
    },
    updateData() {
      const tempData = Object.assign({}, this.temp);
      console.log(tempData);
      updateShop(tempData).then(() => {
        for (const v of this.tableList) {
          if (v.uid === this.temp.uid) {
            const index = this.tableList.indexOf(v);
            this.tableList.splice(index, 1, this.temp);
            break;
          }
        }
        this.isShowEditVisible = false;
        this.$notify({
          title: "成功",
          message: "更新成功",
          type: "success",
          duration: 2000,
        });
      });
    },
    handleSizeChange(val) {
      this.page = val;
      console.log(this.page);
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.page = val;
      console.log(this.page);
      this.fetchData();
    },
    currentChangePage(list) {
      let from = (this.page - 1) * this.pageSize;
      const to = this.page * this.pageSize;
      this.tableList = [];
      for (; from < to; from++) {
        if (list[from]) {
          this.tableList.push(list[from]);
        }
      }
    },
  },
};
</script>