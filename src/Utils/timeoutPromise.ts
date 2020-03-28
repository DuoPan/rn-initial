export default function timeoutPromise(
  task: () => Promise<any>,
  timeout: number | null,
): Promise<any> {
  if (timeout === null) {
    return task();
  } else {
    const timeoutPromise = new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, timeout);
    });
    return Promise.race([timeoutPromise, task()]);
  }
}

// Usage:
// timeoutPromise(() => {
//     return fetch('https://google.com')
// }, 3000);
// This function will abort after 3 seconds.
