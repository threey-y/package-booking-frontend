<template>
  <div id="titile">
    
    <div>
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="运单号" :label-col="{ span: 5 }"  :wrapper-col="{ span: 6 }" >
          <a-input
            v-decorator="[
          'yundanhao',
          {rules: [{ required: true, message: '请输入您的运单号!' }]}
        ]"
            placeholder="请输入您的运单号"
          />
        </a-form-item>

        <a-form-item label="收件人：" :label-col="{ span: 5 }" :wrapper-col="{ span: 6 }">
          <a-input
            v-decorator="[
          'shoujianren',
          {rules: [{ required: true, message: '请输入收件人姓名!' }]}
        ]"
            placeholder="请输入收件人姓名"
          />
        </a-form-item>

        <a-form-item label="电话：" :label-col="{ span: 5 }" :wrapper-col="{ span: 6 }">
          <a-input
            v-decorator="[
          'dianhua',
          {rules: [{ required: true, message: '请输入您的电话' }]}
        ]"
            placeholder="请输入您的电话"
          />
        </a-form-item>

        <a-form-item label="重量：" :label-col="{ span: 5 }" :wrapper-col="{ span: 6 }">
          <a-input
            v-decorator="[
          'zhongliang',
          {rules: [{ required: true, message: '请输入寄件重量!' }]}
        ]"
            placeholder="请输入寄件重量"
          />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button
          @click="showModal"
            type="primary"
            html-type="submit"
            :disabled="hasErrors(form.getFieldsError())"
          >提交信息</a-button>
          <a-modal
      title="提示"
      v-model="visible"
      @ok="handleOk"
    >
      <p>信息提交成功！</p>
      
    </a-modal>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  data() {
    return {
      visible: false,
      hasErrors,
      form: this.$form.createForm(this)
    };
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    // Only show error after a field is touched.
    Name1Error() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("userName") && getFieldError("userName");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      console.log(e);
      this.visible = false
    },
  
  }
};
</script>

<style lang="scss">
#titile{
  margin:0 auto;
  vertical-align: middle;
  height: 150px;
  
}
</style>
