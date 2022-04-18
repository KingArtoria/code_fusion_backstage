<template>
  <div>
    <div class="content">
      <el-table :data="tableData" background border>
        <el-table-column prop="id" label="ID" width="80" align="center" />
        <el-table-column prop="code_link" label="链接" />
        <el-table-column prop="code_use" label="是否使用" width="80" align="center" />
        <el-table-column prop="createdAt" label="创建时间" />
        <el-table-column prop="updatedAt" label="修改时间" />
      </el-table>
    </div>
  </div>
</template>

<script>
import { getAllCode } from '@utils/api';
export default {
  data() {
    return {
      // TODO 查询参数
      selectParams: { page: 1, size: 10 },
      // TODO 表格数据
      tableData: [],
    };
  },
  methods: {
    // ? 获取所有二维码
    getAllCode() {
      getAllCode(this.selectParams).then(res => {
        this.tableData = res.data;
        console.log(res);
      });
    },
  },
  mounted() {
    // ? 获取所有二维码
    this.getAllCode();
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
}
</style>
