import { Observable } from 'rxjs';

// observer.next() same as Promise.then()

let observable = Observable.create((observer: any) => {
  try {
    observer.next('Hewwo mwistah OwO');
    observer.next('Henlo fren');
    setInterval( () => {
      observer.next('Is anybodey dere?? Hewwo');
    }, 2000);
    // observer.complete();
  } catch(err) {
    observer.error(err);
  }
});


// observable.subscribe(SUCCESS, ERROR, COMPLETE) ???
let observer = observable.subscribe(
  (res: any) => addItem(res),
  (error: any) => addItem(error),
  () => addItem('complete')
);

// let observer2 = observable.subscribe(
//   (res: any) => addItem(res)
// );

// observer.add(observer2);

setTimeout(() => {
  observer.unsubscribe();
  console.log('done');
}, 4001);

function addItem(val: any): any {
	let node = document.createElement('li');
	let txtNode = document.createTextNode(val);

	node.appendChild(txtNode);
	document.getElementById('output').appendChild(node);
}
