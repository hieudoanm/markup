import { ErrorTemplate } from '@markup/templates/ErrorTemplate';
import { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
	return <ErrorTemplate code="404" message="Sorry, the page you are looking for does not exist." />;
};

export default NotFoundPage;
