import { Form } from 'antd';
import Layout, { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import React, { useState } from 'react';
import FormComponent from './form.component';
import ToolbarComponent from './toolbar.component';

const FormBuilderComponent = () => {
	const [fields, setFields] = useState([]);
	const [form] = Form.useForm();
	const options = ['Apple', 'Orange', 'Banana'];

	const updateForm = (fieldKey) => {
		if (fieldKey === 'shortText') {
			addShortText();
		} else if (fieldKey === 'multipleSelect') {
			addMultipleSelect();
		} else if (fieldKey === 'singleSelect') {
			addSingleSelect();
		} else if (fieldKey === 'longText') {
			addLongText();
		} else if (fieldKey === 'datePicker') {
			addDatePicker();
		} else if (fieldKey === 'switch') {
			addSwitch();
		}
	};

	const addShortText = () => {
		setFields([
			...fields,
			{
				key: `shortTextInput-${Date.now()}`,
				label: 'Short Text',
				required: true,
				initialValue: 'hello',
			},
		]);
	};
	const addSwitch = () => {
		setFields([
			...fields,
			{
				key: `addSwitch-${Date.now()}`,
				label: 'Switch',
				widget: 'switch',
				initialValue: true,
			},
		]);
	};
	const addDatePicker = () => {
		setFields([
			...fields,
			{
				key: `addDatePicker-${Date.now()}`,
				label: 'Date Picker',
				widget: 'date-picker',
			},
		]);
	};

	const addLongText = () => {
		setFields([
			...fields,
			{
				key: `addLongText-${Date.now()}`,
				label: 'Long Text',
				widget: 'textarea',
				required: true,
			},
		]);
	};
	const addMultipleSelect = () => {
		setFields([
			...fields,
			{
				key: `addMultipleSelect-${Date.now()}`,
				label: 'Multiple Select',
				widget: 'checkbox-group',
				options,
			},
		]);
	};
	const addSingleSelect = () => {
		setFields([
			...fields,
			{
				key: `addSingleSelect-${Date.now()}`,
				label: 'Single Select',
				widget: 'radio-group',
				options,
			},
		]);
	};
	return (
		<Layout>
			<Sider className='site-layout-background'>
				<ToolbarComponent updateForm={updateForm} />
			</Sider>
			<Content
				className='site-layout-background'
				style={{
					padding: 24,
					margin: 0,
					minHeight: 280,
				}}
			>
				<Form form={form} layout='vertical'>
					<FormComponent fields={fields} />
				</Form>
			</Content>
		</Layout>
	);
};
export default FormBuilderComponent;
