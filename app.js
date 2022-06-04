const btn = document.getElementById('btn'),
 taskInput = document.getElementById('task-input'),
 boxs = document.querySelectorAll('.box');

 let drag = null;



btn.addEventListener('click', function() {  

    if (taskInput.value) {
       taskInput.value = taskInput.value.replace(/^\s+|\s+$/gm,'');
       boxs[0].innerHTML += `
       <div class="item" draggable="true"> 
         <header> ${taskInput.value}</header>
        </div> 
       `;
        taskInput.value = '';



        draggableItems = document.querySelectorAll('.item');
        console.log(draggableItems);
        draggableItems.forEach(item => {
            item.addEventListener('dragstart', function() {
                item.classList.add('draggable');
                drag = item
            });
            item.addEventListener('dragend', function() {
                item.classList.remove('draggable');
                drag = null
            });

            boxs.forEach( box => {
                box.addEventListener('dragover', function(e) {
                    e.preventDefault();
                    this.classList.add('dragover')
                })

                box.addEventListener('dragleave', function() {
                   this.classList.remove('dragover')
                });

                box.addEventListener('drop', function() {
                    this.append(drag);
                    this.classList.remove('dragover');
                });
            })
         });

    }
});



