import React from "react";

export default function PromiseStudy() {
  // 直接返回值
  const promise1 = () => Promise.resolve("immedialty");

  // 延迟 500ms 返回
  const promise2 = () =>
    new Promise((resolve) => setTimeout(resolve, 300, "slow"));

  // 延迟 100ms 返回
  const promise3 = () =>
    new Promise((resolve) => setTimeout(resolve, 100, "quick"));

  // 延迟 1000ms 返回
  const promise4 = async () =>
    await new Promise((resolve) => setTimeout(resolve, 500, "very slow"));

  const rejectPromise = () =>
    new Promise((resolve, reject) => setTimeout(reject, 100, "reject promise"));

  // all 所有的 promise 都 resolve，才返回，只要有一个 reject 都走 catch
  const allResolve = () => {
    promiseMethod("all", [promise1(), promise2(), promise3(), promise4()]);
  };

  const allReject = () => {
    promiseMethod("all", [promise1(), promise2(), rejectPromise()]);
  };

  // any 所有的 promise 都 reject，才返回，只要有一个 resolve 都走 then
  const anyResolve = () => {
    promiseMethod("any", [promise1(), promise2(), promise3(), promise4()]);
  };

  const anyReject = () => {
    promiseMethod("any", [promise1(), promise2(), rejectPromise()]);
  };

  const anyOnlyOneReject = () => {
    promiseMethod("any", [rejectPromise()]);
  };

  // allSettled 所有状态都会返回过来，无论是 resolve 还是 reject
  const allSettledResolve = () => {
    promiseMethod("allSettled", [
      promise1(),
      promise2(),
      promise3(),
      rejectPromise(),
    ]);
  };

  const allSettledReject = () => {
    promiseMethod("allSettled", [rejectPromise()]);
  };

  // race 比哪个更加快跑出
  // 只要有一个能先完成，就会跑出
  const raceResolve = () => {
    promiseMethod("race", [promise1(), promise2(), promise3()]);
  };

  const raceRejectResolve = () => {
    promiseMethod("race", [promise2(), rejectPromise()]);
  };

  // race 只有出一 reject 才会直接返回
  const raceOnlyOneReject = () => {
    promiseMethod("race", [rejectPromise()]);
  };

  // 调用 promise 方法
  const promiseMethod = (promiseType, promiseIterator) => {
    return Promise[promiseType](promiseIterator)
      .then((value) => console.log(value))
      .catch((e) => {
        console.error("catch error === " + e);
      });
  };

  return (
    <div>
      <h4>Promise All</h4>
      <button onClick={allResolve}>All resolve</button>
      <button onClick={allReject}>All reject</button>
      <h4>Promise Any</h4>
      <button onClick={anyResolve}>Any resolve</button>
      <button onClick={anyReject}>Any reject</button>
      <button onClick={anyOnlyOneReject}>Any only one reject</button>
      <h4>Promise Race</h4>
      <button onClick={raceResolve}>Race resolve</button>
      <button onClick={raceRejectResolve}>Race Resolve && Reject</button>
      <button onClick={raceOnlyOneReject}>Race only reject</button>
      <h4>Promise All Settled</h4>
      <button onClick={allSettledResolve}>All Settled resolve</button>
      <button onClick={allSettledReject}>All Settled reject</button>
    </div>
  );
}
