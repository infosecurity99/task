

let tasks = [];

function drawList() {
    document.getElementById('rejectedList').innerHTML ='';
    document.getElementById('pendingList').innerHTML ='';
    document.getElementById('doingList').innerHTML ='';
    document.getElementById('doneList').innerHTML ='';
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].status === 'pending') {
            document.getElementById('pendingList').innerHTML +=
                '<div class="mt-2">' +
                '<h6>' + 'Task name: ' + tasks[i].title+ (tasks[i].rejected===true ? '<span class="badge badge-pill badge-danger">Rejected</span>':' ')  + '</h6>' +
                '<h6>' + 'Start date: ' + tasks[i].startDate + '</h6>' +
                '<h6>' + 'End date: ' + tasks[i].endDate + '</h6>' +
                '<h6>' + 'Staff: ' + tasks[i].staff + '</h6>' +
                '<select id="select'+ i +'" class="form-control mt-2">' +
                '<option disabled selected>Select status</option>' +
                '<option value="doing">doing</option>' +
                '<option value="done">done</option>' +
                '</select>' +
                '<button onclick="editTask('+ i +')" type="button" class="btn btn-warning mt-2">edit</button>' +
                '<button onclick="deleteTask('+ i +')" type="button" class="btn btn-danger mt-2 ml-3">delete</button>' +
                '<hr class="bg-dark">' +
                '</div>'
        }
        else if (tasks[i].status === 'doing') {
            document.getElementById('doingList').innerHTML +=
                '<div class="mt-2">' +
                '<h6>' + 'Task name: ' + tasks[i].title+(tasks[i].rejected===true ? '<span class="badge badge-pill badge-danger">Rejected</span>':' ')  + '</h6>' +
                '<h6>' + 'Start date: ' + tasks[i].startDate + '</h6>' +
                '<h6>' + 'End date: ' + tasks[i].endDate + '</h6>' +
                '<h6>' + 'Staff: ' + tasks[i].staff + '</h6>' +
                '<select id="select'+ i +'" class="form-control mt-2">' +
                '<option disabled selected>Select status</option>' +
                '<option value="pending">pending</option>' +
                '<option value="done">done</option>' +
                '</select>' +
                '<button onclick="editTask('+ i +')" type="button" class="btn btn-warning mt-2">edit</button>' +
                '<button onclick="deleteTask('+ i +')" type="button" class="btn btn-danger mt-2 ml-3">delete</button>' +
                '<hr class="bg-dark">' +
                '</div>'
        }
        else if (tasks[i].status === 'done') {
            document.getElementById('doneList').innerHTML +=
                '<div class="mt-2">' +
                '<h6>' + 'Task name: ' + tasks[i].title +(tasks[i].rejected===true ? '<span class="badge badge-pill badge-danger">Rejected</span>':' ') + '</h6>' +
                '<h6>' + 'Start date: ' + tasks[i].startDate + '</h6>' +
                '<h6>' + 'End date: ' + tasks[i].endDate + '</h6>' +
                '<h6>' + 'Staff: ' + tasks[i].staff + '</h6>' +
                '<button onclick="rejectedTask('+ i +')" type="button" class="btn btn-danger btn-block">rejected</button>' +
                '<hr class="bg-dark">' +
                '</div>'
        }
        else {
            document.getElementById('rejectedList').innerHTML +=
                '<div class="mt-2">' +
                '<h6>' + 'Task name: ' + tasks[i].title + '</h6>' +
                '<h6>' + 'Start date: ' + tasks[i].startDate + '</h6>' +
                '<h6>' + 'End date: ' + tasks[i].endDate + '</h6>' +
                '<h6>' + 'Staff: ' + tasks[i].staff + '</h6>' +
                '<select id="select'+ i +'" class="form-control mt-2">' +
                '<option disabled selected>Select status</option>' +
                '<option value="pending">pending</option>' +
                '<option value="doing">doing</option>' +
                '</select>' +
                '<button onclick="editTask('+ i +')" type="button" class="btn btn-warning mt-2">edit</button>' +
                '<hr class="bg-dark">' +
                '</div>'
        }
    }
}
drawList();


function addTask() {
    let title = document.forms['addForm']['title'].value;
    let startDate = document.forms['addForm']['startDate'].value;
    let endDate = document.forms['addForm']['endDate'].value;
    let staff = document.forms['addForm']['staff'].value;
    let status = document.forms['addForm']['status'].value;

    if (title.trim().length > 0 && startDate.trim().length > 0 && endDate.trim().length > 0 &&
        staff !== 'Select staff' && status !== 'Select status') {
        let newTask = {
            title,
            startDate,
            endDate,
            status,
            staff,
            rejected:false
        };
       tasks.push(newTask);
       drawList();
       document.forms['addForm'].reset();
    } else {
        alert("Formani to'ldiring")
    }
}

function deleteTask(index) {
    tasks.splice(index,1);
    drawList()
}

function editTask(index) {
    if (document.getElementById("select"+index).value!=="Select status"){
        tasks[index].status=document.getElementById("select"+index).value
        drawList()
    }
}

function rejectedTask(index) {
    tasks[index].status='rejected';
    tasks[index].rejected=true;
    console.log(tasks);
    drawList()
}

