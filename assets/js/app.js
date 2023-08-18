const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
/* Modificar nombre de las constantes
para ser comprensibles y respetar el
camelCase*/ 
const dataName = document.querySelector('name');
const blog = document.querySelector('#blog');
const dataLocation = document.querySelector('.location');

const displayUser = async (username) => {  //se agrego el término async
  dataName.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  dataName.textContent = data.name;
  blog.textContent = data.blog;
  dataLocation.textContent = data.location;
} 

function handleError(err) {
  console.log('OH NO!');
  console.log(err); 
  dataName.textContent = `Algo salió mal: ${err}`; //falta ;
}

displayUser('stolinski').catch(handleError);