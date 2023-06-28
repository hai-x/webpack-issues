const foo = () =>
  // 测试函数
  console.log("foo");

const bar = (foo) => {
  Promise.resolve().then((r) => foo());
};

bar(foo);
