<template>
  <div class="app-container">
    <el-select v-model="componentName" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <div style="padding: 20px; height: 500px">
      <component :is="componentName"></component>
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/Charts/BarChart";
import LineChart from "@/components/Charts/LineChart";
import PieChart from "@/components/Charts/PieChart";
import RaddarChart from "@/components/Charts/RaddarChart";

export default {
  components: {
    BarChart,
    LineChart,
    PieChart,
    RaddarChart,
  },
  data() {
    return {
      options: [
        {
          value: "BarChart",
          label: "BarChart",
        },
        {
          value: "LineChart",
          label: "LineChart",
        },
        {
          value: "PieChart",
          label: "PieChart",
        },
        {
          value: "RaddarChart",
          label: "RaddarChart",
        },
      ],
      componentName: "BarChart",
    };
  },
};
</script>