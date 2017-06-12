$(document).ready(function () {

	$('#addItem').on('click', addItem);
	$('.todoList').on('click', '.deleteBtn', deleteItem);

	function addItem() {
		var todoText = $('#newTodo').val();
		$('.todoList').append('<li class="item">' + todoText + '<span class="glyphicon glyphicon-remove deleteBtn"></span></li>');
		$('#newTodo').val("");
	};

	function deleteItem() {
		$(this).parent().remove();
	}
})
