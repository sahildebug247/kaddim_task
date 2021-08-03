import {
	AlignLeftOutlined,
	PlusSquareOutlined,
	CheckSquareOutlined,
	PlusCircleOutlined,
	CheckOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';

class ToolbarComponent extends React.Component {
	handleClick = (e) => {
		this.props.updateForm(e.key);
	};
	render() {
		return (
			<Menu theme='dark' mode='inline' onClick={this.handleClick}>
				<Menu.Item key='shortText' icon={<AlignLeftOutlined />}>
					Short Text
				</Menu.Item>
				<Menu.Item key='multipleSelect' icon={<CheckSquareOutlined />}>
					Multiple Select
				</Menu.Item>
				<Menu.Item key='singleSelect' icon={<PlusCircleOutlined />}>
					Single Select
				</Menu.Item>
				<Menu.Item key='longText' icon={<AlignLeftOutlined />}>
					Long Text
				</Menu.Item>
				<Menu.Item key='switch' icon={<CheckOutlined />}>
					Switch
				</Menu.Item>
				<Menu.Item key='datePicker' icon={<PlusSquareOutlined />}>
					Date Picker
				</Menu.Item>
			</Menu>
		);
	}
}
export default ToolbarComponent;
