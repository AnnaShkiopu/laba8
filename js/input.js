	
	let frm = '<div class="forms" id="inputs"><form> <div class="form-row align-items-center"><div class="col-auto"><label class="sr-only" for="inlineFormInput">Name</label><input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe"></div><div class="col-auto"><label class="sr-only" for="inlineFormInputGroup">Username</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text">@</div></div><input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username"></div></div><div class="col-auto"><div class="form-check mb-2"><input class="form-check-input" type="checkbox" id="autoSizingCheck"><label class="form-check-label" for="autoSizingCheck">Remember me</label></div></div></div></form>'

	$('#add_el').click(function() {
        $('#main').append(frm);
    });

    $('#del_el').click(function () {
        $('.forms').last().remove();
    });
