function CriarUsuario() {
        const resp = document.getElementById('respCriar');
        resp.className = '';
        resp.innerText = '';

        fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            nome: nome.value,
            idade: idade.value,
            email: email.value
            })
        })
        .then(async r => {
            const data = await r.json();
            if (!r.ok) throw data;
            return data;
        })
        .then(d => {
            resp.classList.add('msg', 'sucesso');
            resp.innerText = d.mensagem || 'Usuário criado com sucesso!';
        })
        .catch(e => {
            resp.classList.add('msg', 'erro');
            resp.innerText = e.erro || 'Erro ao criar usuário';
        });
        }