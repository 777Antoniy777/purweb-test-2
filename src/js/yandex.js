const input = {
  // абсолютный путь до дирректории проекта в файловой системе
  absoluteRepoPath: "/var/www/projects/project1",
  // список алиасов по путям из исходной системы сборки
  aliases: {
      "@": "/var/www/projects/project1/src",
  },
  // информация обо всех модулях данного проекта
  modules: [
      {
          // относительный от корня путь
          file: "./src/pages/a.js",
          deps: [
  // валидная для исходной системы сборки строка, описывающая путь до модуля
  // гарантируется, что такой модуль существует и описан в данной секции
              "/var/www/projects/project1/src/pages/b.js",
              "./b.js"
          ],
      },
      {
          file: "./src/pages/b.js",
          deps: [
              "@/pages/с.js",
          ],
      },
      {
          file: "./src/pages/c.js",
          deps: [ ],
      },
      {
          file: "./src/pages/d.js",
          deps: [ ],
      },
  ],
};

const sortModules = (input) => {
  const toString = Object.prototype.toString;
  const result = [];

  for (let key in input) {
    const value = input[key];
    const typeKey = toString.call(value);

    if (typeKey === '[object Array]') {
      value.forEach(elem => {
        if (elem.deps.length === 0) {
          let newFileName = '';
          const splittedFile = elem.file.split('/');
          console.log(splittedFile)

          newFileName = `${input.absoluteRepoPath}/${splittedFile[1]}/${splittedFile[2]}/${splittedFile[3]}`;
          result.push(newFileName);
        }
      });
    }
  }

  return result;
};

console.log(sortModules(input))
