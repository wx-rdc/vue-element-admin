<template>
  <div class="app-container">
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px">
      <el-form :inline="true">
        <el-form-item>
          <el-select v-model="value" clearable placeholder="老师">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="value" clearable placeholder="学科">
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
          <el-select
            v-model="type"
            clearable
            style="width: 150px"
            class="filter-item"
            placeholder="视图"
          >
            <el-option label="月视图" value="month"></el-option>
            <el-option label="周视图" value="week"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
            ><i class="el-icon-search"></i>搜索</el-button
          >
        </el-form-item>
        <el-form-item>
          <el-button type="primary">新增排课</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <div class="app-container">
      <full-calendar
        ref="calendar"
        :config="config"
        :events="events"
        v-if="isActive"
      />
    </div>
  </div>
</template>
<script>
import { getMonth, getWeek } from "@/api/calendar";
import { FullCalendar } from "vue-full-calendar";
import "fullcalendar/dist/fullcalendar.min.css";

export default {
  name: "calendar",
  components: { FullCalendar },
  data() {
    return {
      list: null,
      listLoading: true,
      total: 0,
      page: 1,
      type: "month",
      isActive: true,
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
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      configs: {
        month: {
          header: {
            left: "prev,next today",
            center: "title",
            right: "",
          },
          slotEventOverlap: false,
          showNonCurrentDates: false,
          defaultView: "month",
          locale: "zh-cn",
        },
        week: {
          header: {
            left: "prev,next today",
            center: "title",
            right: "",
          },
          defaultView: "agendaWeek",
          selectable: true,
          showNonCurrentDates: false,
          slotDuration: "00:30:00", // 一格时间槽代表多长时间，默认00:30:00（30分钟）
          slotEventOverlap: false,
          selectOverlap: false, // 确定用户是否被允许选择被事件占用的时间段，默认true可占用时间段
          selectConstraint: "businessHours", // 限制用户选择指定时间段的日程数据：an event ID, "businessHours", object
          minTime: "08:00:00", // 周/日视图左边时间线显示的最小日期，默认00:00:00
          maxTime: "22:00:00", // 周/日视图左边时间线显示的最大日期，默认24:00:00
          height: 850, // 组件高度，默认aspectRatio即纵横比；parent父容器大小；auto自动不带滚动条；支持数字和函数返回像素；支持$('#calendar').fullCalendar('option', 'height', 700);
          locale: "zh-cn", // 国际化，前提引用lang-all.js，参见官方demo-->languages.html
          // displayEventTime : false,       // 每一个日程块中是否显示时间，默认true显示
          // displayEventEnd : true,         // 是否显示日程块中的“结束时间”，默认true，如果false则只显示开始时间
          businessHours: [
            {
              // 时间段
              dow: [0, 1, 2, 3, 4, 5, 6],
              start: "08:00",
              // 开始时间 (10am in this example)
              end: "12:00",
            },
            {
              // 时间段
              dow: [0, 1, 2, 3, 4, 5, 6],
              start: "14:00",
              // 开始时间 (10am in this example)
              end: "18:00",
            },
            {
              // 时间段
              dow: [0, 1, 2, 3, 4, 5, 6],
              start: "18:00",
              // 开始时间 (10am in this example)
              end: "22:00",
            },
          ],
        },
      },
      events: [],
    };
  },
  computed: {
    config() {
      return this.configs[this.type];
    },
  },
  mounted() {
    this.initCalendar();
  },
  methods: {
    initCalendar() {
      let getMethod = this.type === "month" ? getMonth : getWeek;
      this.isActive = true;
      getMethod().then((response) => {
        this.$refs.calendar.fireMethod("removeEvents");
        this.events = response.data;
      });
    },
  },
  watch: {
    config(val, oldValue) {
      this.isActive = false;
      this.$nextTick(function () {
        this.initCalendar();
      });
      // console.log(val, oldValue);
    },
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
</style>
