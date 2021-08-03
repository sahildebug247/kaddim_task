import { Button, Form } from 'antd';
import FormBuilder from 'antd-form-builder';
import React from 'react';

const FormComponent = (props) => {
	const [form] = Form.useForm();

	const meta = {
		columns: 4,
		formItemLayout: null, // Must set this for inline layout
		colon: true,
		fields: props.fields,
	};

	return (
		<Form form={form} layout='vertical'>
			<FormBuilder form={form} meta={meta} />
			<Form.Item>
				<Button htmlType='submit' type='primary' style={{ width: '100%' }}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};
export default FormComponent;
