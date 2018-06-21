import { ReplaySubject } from 'rxjs';

// Subject is both an observerable and observer
let subject = new ReplaySubject(2);

subject.subscribe(
	data => addItem(`observer 1: ${data}`),
	err => addItem(err),
	() => addItem('observer 1: completed')
);

subject.next('Hewwo OwO');
subject.next('2');
subject.next('observer 2 is about to subscribe');

let observer2 = subject.subscribe(
	data => addItem(`observer 2: ${data}`)
);

subject.next('Henlo fren');
subject.next('Senpai pls');

observer2.unsubscribe();

subject.next('Catch me if you can Edd bois');

function addItem(val: any) {
	let node = document.createElement('li');
	let txtNode = document.createTextNode(val);

	node.appendChild(txtNode);
	document.getElementById('output').appendChild(node);
}
