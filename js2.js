function rumtime() {
	var horas = new Date();
	var h = horas.getHours();
	var m = horas.getMinutes();
	var s = horas.getSeconds();

	var atual = window.document.getElementById('horas');
    
	atual.innerHTML = `agora e : ${h} horas : ${m} minutos : ${s} segundos`
	} 
	function relogio() {
		setInterval(function(){ rumtime(); }, 2000);
	}