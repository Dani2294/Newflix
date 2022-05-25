import { TopBar } from "../../components";

export default {
	title: "Components/TopBar",
	component: TopBar,
};

const Template = (args) => <TopBar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Connexion = Template.bind({});
Connexion.args = {
	connexion: true,
};

export const Browse = Template.bind({});
Browse.args = {
	browse: true,
};
