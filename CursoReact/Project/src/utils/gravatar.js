import md5 from 'md5';

const gravatar = (email) => {
	const base = 'https://gravatar.com/avatar/';
	const formatemail = email.trim().toLowerCase();
	const hash = md5(formatemail, { encoding: 'binary' });

	return `${base}${hash}`;
};

export default gravatar;
