var users = [];

function login() {
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    // Simplesmente aceita qualquer combinação de usuário e senha para fins de teste
    alert('Login bem-sucedido!');
    // Redireciona para a página principal após o login
    window.location.href = 'home.html';
}

function register() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var age = document.getElementById('age').value;
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('registerPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Simplesmente adiciona o usuário ao "banco de dados" para fins de teste
    users.push({
        firstName: firstName,
        lastName: lastName,
        age: age,
        dob: dob,
        email: email,
        password: password
    });

    alert('Conta criada com sucesso! Faça login para continuar.');
    // Redireciona para a página de login após o registro
    window.location.href = 'index.html';
}

function logout() {
    // Simplesmente redireciona de volta para a página de login após o logout
    window.location.href = 'index.html';
}

// Simulando uma enquete e contagem de votos
var poll = {
    question: 'Qual é a sua cor favorita?',
    options: [
        { value: 'red', count: 0 },
        { value: 'blue', count: 0 },
        { value: 'green', count: 0 }
    ]
};

function vote() {
    var selectedOption = document.querySelector('input[name="color"]:checked');

    if (selectedOption) {
        var selectedValue = selectedOption.value;
        var option = poll.options.find(o => o.value === selectedValue);

        if (option) {
            option.count++;
            alert('Voto registrado com sucesso!');
            // Pode adicionar mais ações após o voto, se necessário
        }
    } else {
        alert('Por favor, selecione uma opção antes de votar.');
    }
}

function openProfile() {
    // Redireciona para a página de perfil ao clicar no ícone de usuário
    window.location.href = 'profile.html';
}
function toggleProfileOptions() {
    var profileOptions = document.getElementById('profileOptions');
    profileOptions.style.display = (profileOptions.style.display === 'block') ? 'none' : 'block';
}

function createNewPoll() {
    // Lógica para redirecionar para a página de criação de enquete
    // window.location.href = 'create_poll.html';
    alert('Redirecionar para a página de criação de enquete');
}
function vote(option) {
    alert('Voto registrado com sucesso para a opção: ' + option);
    // Lógica adicional pode ser adicionada aqui
}

function createNewPoll(event) {
    event.preventDefault();
    var newPollQuestion = document.getElementById('newPollQuestion').value;

    // Lógica para criar nova enquete com a pergunta 'newPollQuestion'
    alert('Nova enquete criada com sucesso: ' + newPollQuestion);
    // Lógica adicional pode ser adicionada aqui
}
var currentUser = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john.doe@example.com'
};

document.addEventListener('DOMContentLoaded', function () {
    // Preenche os campos do formulário com as informações do usuário
    document.getElementById('profileFirstName').value = currentUser.firstName;
    document.getElementById('profileLastName').value = currentUser.lastName;
    document.getElementById('profileAge').value = currentUser.age;
    document.getElementById('profileEmail').value = currentUser.email;
});

function resetPassword() {
    // Lógica para redefinir a senha
    alert('Senha redefinida com sucesso!');
    // Lógica adicional pode ser adicionada aqui
}