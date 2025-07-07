import { ErrorTemplate } from '@markup/templates/ErrorTemplate';
import { NextPage } from 'next';

const InternalServerErrorPage: NextPage = () => {
	return <ErrorTemplate code="500" message="Something went wrong on our end. Please try again later." />;
};

export default InternalServerErrorPage;
