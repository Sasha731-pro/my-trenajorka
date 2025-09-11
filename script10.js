//для ошибок и классов бутстрап

const bootstrapCssUrl = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
let bootstrapClasses = new Set();

function openTab(evt, tabName) {
    // Скрыть все вкладки
    const tabcontents = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active");
    }

    // Удалить класс "active" у всех кнопок
    const tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Показать текущую вкладку и добавить класс "active" к кнопке
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
         
}

// Переключение вкладок
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tabcontent1");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Убрать active у всех кнопок и вкладок
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(tab => tab.classList.remove("active"));

    // Добавить active на кликнутую кнопку и соответствующую вкладку
    button.classList.add("active");
    const tabId = button.getAttribute("data-tab");
    const activeTab = document.getElementById(tabId);
    activeTab.classList.add("active");

    // Обновить CodeMirror, чтобы правильно отрисовался
    if(tabId === "htmlTab1") htmlEditor.refresh();
    else if(tabId === "cssTab") cssEditor.refresh();
    else if(tabId === "jsTab1") jsEditor2.refresh();

    // if(tabId === "htmlTab2") htmlEditor1.refresh();
    // else if(tabId === "cssTab1") cssEditor1.refresh();
    // else if(tabId === "jsTab2") jsEditor1.refresh();

  });
});

const tabButtons1 = document.querySelectorAll(".tab-btn1");
const tabContents1 = document.querySelectorAll(".tabcontent2");

tabButtons1.forEach(button => {
  button.addEventListener("click", () => {
    // Убрать active у всех кнопок и вкладок
    tabButtons1.forEach(btn => btn.classList.remove("active"));
    tabContents1.forEach(tab => tab.classList.remove("active"));

    // Добавить active на кликнутую кнопку и соответствующую вкладку
    button.classList.add("active");
    const tabId = button.getAttribute("data-tab");
    const activeTab = document.getElementById(tabId);
    activeTab.classList.add("active");

    // Обновить CodeMirror, чтобы правильно отрисовался
    // if(tabId === "htmlTab1") htmlEditor.refresh();
    // else if(tabId === "cssTab") cssEditor.refresh();
    // else if(tabId === "jsTab1") jsEditor2.refresh();

    if(tabId === "htmlTab2") htmlEditor1.refresh();
    else if(tabId === "cssTab1") cssEditor1.refresh();
    else if(tabId === "jsTab2") jsEditor1.refresh();

  });
});

//код для подсветки классов и функций
const htmlEditor= CodeMirror.fromTextArea(document.getElementById("htmlCode"), {
    lineNumbers: true,
    mode: "text/html",
    lineWrapping: true,
    theme: "default"
});
htmlEditor.setSize(null, "83vh"); // только для этого редактора

const htmlEditor1= CodeMirror.fromTextArea(document.getElementById("htmlCode1"), {
    lineNumbers: true,
    mode: "text/html",
    lineWrapping: true,
    theme: "default",
    height: "auto"
});
htmlEditor1.setSize(null, "83vh");

const cssEditor = CodeMirror.fromTextArea(document.getElementById("cssCode"), {
    lineNumbers: true,
    mode: "text/css",
    lineWrapping: true,
    theme: "default"
});
cssEditor.setSize(null, "83vh"); // только для этого редактора

const cssEditor1 = CodeMirror.fromTextArea(document.getElementById("cssCode1"), {
    lineNumbers: true,
    mode: "text/css",
    lineWrapping: true,
    theme: "default"
});
cssEditor1.setSize(null, "83vh");

const jsEditor = CodeMirror.fromTextArea(document.getElementById("jsCode"), {
    lineNumbers: true,
    mode: "text/javascript",
    lineWrapping: true,
    matchBrackets: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
    lint: {
        async: true,
        //getAnnotations: validateJavaScript, // используем нашу функцию
        lintOnChange: true
   },
    theme: "default",
    height: "auto"
});
jsEditor.setSize(null, "80vh"); // только для этого редактора

const jsEditor1 = CodeMirror.fromTextArea(document.getElementById("jsCode1"), {
    lineNumbers: true,
    mode: "text/javascript",
    lineWrapping: true,
    theme: "default",
    height: "auto"
});
jsEditor1.setSize(null, "83vh");

const jsEditor2 = CodeMirror.fromTextArea(document.getElementById("jsCode2"), {
    lineNumbers: true,
    mode: "text/javascript",
    lineWrapping: true,
    theme: "default",
    height: "auto"
});
jsEditor2.setSize(null, "83vh"); // только для этого редактора

const jquEditor = CodeMirror.fromTextArea(document.getElementById("jquCode"), {
    lineNumbers: true,
    mode: "text/javascript",
    lineWrapping: true,
    theme: "default",
    height: "auto"
});
jquEditor.setSize(null, "80vh"); 

const vueEditor = CodeMirror.fromTextArea(document.getElementById("vueCode"), {
    lineNumbers: true,
    mode: "text/javascript",
    lineWrapping: true,
    theme: "default",
    height: "auto"
});
vueEditor.setSize(null, "80vh"); 

const JSONEditor = CodeMirror.fromTextArea(document.getElementById("JSONCode"), {
    lineNumbers: true,
    mode: "text/javascript",
    lineWrapping: true,
    theme: "default",
    height: "auto"
});


window.showError = function(message) {
    const errorOutput = document.getElementById('errorOutput');
    errorOutput.style.display = 'block';
    errorOutput.textContent += message + '\n';
};

window.showLog = function(message) {
    // Можно добавить отдельный блок логов, если нужно
    // Для примера выводим в консоль
    console.log('Log из iframe:', message);
};

// попытка сделать проверку на ошибки на отдельной странице JS
let results = [];

const iframe = document.getElementById('sandbox');
const output = document.getElementById('output');
const runButton = document.getElementById('runButton'); // Переменная должна быть объявлена
// Загрузка sandbox.html в iframe
iframe.src = 'sandbox3.html';

// Обработчик сообщений от iframe (один раз)
window.addEventListener('message', (event) => {
  const data = event.data;
  //поиск ошибок jQuery
  if (data.type === 'jq-error') {
  alert(`Ошибка в jQuery коде:\n${data.message}\nСтрока: ${data.line}`);
  }

});

// Функция для очистки подсветки ошибок
function clearErrorHighlight() {
    const totalLines = jsEditor.lineCount();
    for (let i = 0; i < totalLines; i++) {
        jsEditor.removeLineClass(i, 'background', 'error-line');
    }
}

// Подсветка строки с ошибкой
function highlightErrorLine(lineNumber) {
    clearErrorHighlight();
    const lineIndex = lineNumber - 1; // Индексация с 0
    if (lineIndex >= 0 && lineIndex < jsEditor.lineCount()) {
        const lineHandle = jsEditor.getLineHandle(lineIndex);
        if (lineHandle) {
            jsEditor.addLineClass(lineHandle, 'background', 'error-line');
        }
    }
}


function updateOutput() {
    // const output = document.getElementById('output'); // Убедитесь, что у вас есть элемент с id 'output'
    output.innerHTML = results.map(r => `<p>${r}</p>`).join('');
}

let currentMessageHandler = null;

 //код работы кнопки Запустить код JS
document.getElementById('runButton').addEventListener('click', function() {
    // Очистить предыдущие ошибки
    clearErrorHighlight();
    
    const originalCode = jsEditor.getValue();
    const iframe = document.getElementById('sandbox');
    const output = document.getElementById('output');
    // const codeToRun = '//# sourceURL=userCode.js\n' + code;
    const codeToRun = originalCode + '\n//# sourceURL=userCode.js';
    

    output.textContent = ''; // Очищаем вывод

    // Создаем новый массив для хранения результатов
    const results = [];
    // Переопределяем console.log
    const originalLog = console.log;

    console.log = function(message) {
        results.push(message); // Сохраняем сообщение в массив
        originalLog.apply(console, arguments); // Вызов оригинального console.log
        updateOutput(); // Обновляем вывод
    };

    if (window.handleSandboxMessage) {
        window.removeEventListener('message', window.handleSandboxMessage);
    }

   try {
        const syntax = esprima.parseScript(originalCode, { 
            tolerant: false, 
            loc: true // Включаем информацию о позиции
        });
    } catch (e) {
        let lineNumber = e.lineNumber || 0;
        let errorMessage = e.description || e.message;
         
        // alert(`Ошибка в JavaScript: ${errorMessage}\nСтрока: ${lineNumber}`);
       results.push(`Ошибка: ${errorMessage} на строке ${lineNumber}`);
        highlightErrorLine(lineNumber - 1); // Подсвечиваем строку с ошибкой
        updateOutput(); // Обновляем вывод
        return;
    }
    // Обработчик для получения результата из iframe
     function handleSandboxMessage(event) {
        if (event.data.type === 'result') {

            results.push(event.data.message); // Добавляем результат в массив
            updateOutput(); // Обновляем вывод

        } else if (event.data.type === 'error') {
            const errorMessage = event.data.message;
            const stackLineNumber = Number(event.data.line); // получаем номер строки

           let editorLineNumber = null;
            
            if (stackLineNumber !== null && !isNaN(stackLineNumber)) {
                // Вычитаем 1 потому что sourceURL добавляет одну строку в конец
                editorLineNumber = stackLineNumber - 1;
                
                // Проверяем, что номер строки валидный
                if (editorLineNumber < 0 || editorLineNumber >= originalCode.split('\n').length) {
                    editorLineNumber = null;
                }
            }

        if (editorLineNumber !== null) {
            results.push(`Ошибка на строке ${editorLineNumber + 1}: ${errorMessage}`); // Добавляем номер строки к сообщению об ошибке
            highlightErrorLine(editorLineNumber); // Подсвечиваем строку с ошибкой
        } else {
                results.push(`Ошибка: ${errorMessage}`);
                clearErrorHighlight();
        }  
            updateOutput(); // Обновляем вывод
            console.log = originalLog;
        }
    };

    // Добавляем его
    window.handleSandboxMessage = handleSandboxMessage;
    window.addEventListener('message', handleSandboxMessage);

     // Отправляем код в iframe
     iframe.contentWindow.postMessage(codeToRun, '*');

     // Функция для обновления вывода
     function updateOutput() {
        // output.innerHTML = results.map(result => `<p>${result}</p>`).join('');
        const iframeDoc = output.contentDocument || output.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(results.map(result => `<p>${result}</p>`).join(''));
        iframeDoc.close();
    }

    // Функция для подсветки строки с ошибкой
    function highlightErrorLine(lineNumber) {
        // Удаляем предыдущие подсветки
        clearErrorHighlight();
        const lineHandle = jsEditor.getLineHandle(lineNumber);
        if (lineHandle) {
            jsEditor.addLineClass(lineHandle, 'background', 'error-line');
        }
    }

    // Функция для очистки подсветки

    function clearErrorHighlight() {
        jsEditor.eachLine(line => {
            jsEditor.removeLineClass(line, 'background', 'error-line');
        });
    }

 
});

  const output1 = document.getElementById("output");

  function zoomIn() {
    const doc = output1.contentDocument || output1.contentWindow.document;
    const body = doc.body;
    const currentSize = parseFloat(body.style.fontSize) || 16;
    body.style.fontSize = (currentSize + 2) + "px";
  }

  function zoomOut() {
    const doc = output1.contentDocument || output1.contentWindow.document;
    const body = doc.body;
    const currentSize = parseFloat(body.style.fontSize) || 16;
    body.style.fontSize = (currentSize - 2) + "px";
  }


//для ошибок bootatrap (подключение классов)
async function loadBootstrapClasses(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Не удалось загрузить CSS");

    const cssText = await response.text();

    const classRegex = /\.([a-zA-Z0-9_-]+)(?=[\s\.,:{])/g;

    const classesSet = new Set();
    let match;
    while ((match = classRegex.exec(cssText)) !== null) {
      classesSet.add(match[1]);
    }

    return classesSet;
  } catch (e) {
    console.error(e);
    return new Set();
  }
}

window.addEventListener('load', () => {
  loadBootstrapClasses(bootstrapCssUrl).then(classesSet => {
    bootstrapClasses = classesSet;
    console.log("Bootstrap классы загружены:", bootstrapClasses.size);
  });
});

function checkBootstrapClasses(htmlCode) {
    if (bootstrapClasses.size === 0) {
        alert("Классы Bootstrap ещё не загружены. Пожалуйста, подождите и попробуйте снова.");
        return [];
    }

    const errors = [];
    const lines = htmlCode.split('\n');
    // Регулярное выражение для поиска классов в строке
    const classRegex = /class\s*=\s*"(.*?)"/g;

    lines.forEach((line, index) => {
        let match;
        while ((match = classRegex.exec(line)) !== null) {
            const classes = match[1].split(/\s+/);
            classes.forEach(cls => {
                if (cls && !bootstrapClasses.has(cls)) {
                    errors.push({
                        line: index + 1,
                        className: cls,
                        message: `Класс Bootstrap "${cls}" не распознан`
                    });
                }
            });
        }
    });

    return errors;
}


// Переменная для хранения множества валидных CSS-свойств
let validCssProperties = new Set();

// Функция загрузки списка CSS-свойств из MDN
async function loadCssProperties() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/mdn/data/master/css/properties.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        validCssProperties = new Set(Object.keys(data));
        console.log('CSS-свойства загружены:', validCssProperties.size);
    } catch (err) {
        console.error('Не удалось загрузить список CSS-свойств:', err);
        // На случай ошибки загрузки можно подгрузить минимальный набор:
        validCssProperties = new Set([
            "background-color",
            "color",
            "font-size",
            "margin",
            "padding",
            "border",
            "width",
            "height",
            "font-weight",
        ]);
    }
}

// Запускаем загрузку при инициализации
loadCssProperties();

function validateCssProperties(cssCode) {
    let errors = [];
    if (validCssProperties.size === 0) {
        // Если список ещё не загружен, предупреждаем и возвращаем без ошибок
        console.warn('Список CSS-свойств ещё не загружен, проверка пропущена');
        return errors;
    }

    let ast;
    try {
        ast = csstree.parse(cssCode, { positions: true });
    } catch (e) {
        // Синтаксическая ошибка, возвращаем сразу
        let line = 0;
        if (e && e.parseError && e.parseError.line) {
            line = e.parseError.line;
        } else if (e && e.line) {
            line = e.line;
        } else if (e && e.location && e.location.start && e.location.start.line) {
            line = e.location.start.line;
        }
        errors.push({ line, message: `Синтаксическая ошибка: ${e.message}` });
        return errors;
    }

    // Проходим по всем декларациям и проверяем свойства
    csstree.walk(ast, {
        visit: 'Declaration',
        enter(node) {
            const propName = node.property;
            if (!validCssProperties.has(propName)) {
                // Получаем позицию свойства
                let line = 0;
                if (node.loc && node.loc.start) {
                    line = node.loc.start.line;
                }
                errors.push({ line, message: `Неизвестное CSS-свойство: "${propName}"` });
            }
        }
    });

    return errors;
}

function checkBracketsBalance(cssCode) {
    const stack = [];
    const errors = [];
    const pairs = {
        '{': '}',
        '(': ')',
        '[': ']'
    };
    const openingBrackets = new Set(['{', '(', '[']);
    const closingBrackets = new Set(['}', ')', ']']);

    const lines = cssCode.split('\n');

    for (let lineNum = 0; lineNum < lines.length; lineNum++) {
        const line = lines[lineNum];
        for (let col = 0; col < line.length; col++) {
            const ch = line[col];
            if (openingBrackets.has(ch)) {
                stack.push({ ch, line: lineNum + 1, col: col + 1 });
            } else if (closingBrackets.has(ch)) {
                if (stack.length === 0) {
                    errors.push({
                        line: lineNum + 1,
                        message: `Лишняя закрывающая скобка "${ch}" в позиции ${col + 1}`
                    });
                } else {
                    const last = stack[stack.length - 1];
                    if (pairs[last.ch] === ch) {
                        stack.pop();
                    } else {
                        errors.push({
                            line: lineNum + 1,
                            message: `Несовпадающая закрывающая скобка "${ch}" в позиции ${col + 1}, ожидалась "${pairs[last.ch]}"`
                        });
                        stack.pop(); // удаляем ошибочную открывающую, чтобы не плодить ошибки
                    }
                }
            }
        }
    }

    // Если остались незакрытые скобки
    while (stack.length > 0) {
        const unclosed = stack.pop();
        errors.push({
            line: unclosed.line,
            message: `Незакрытая открывающая скобка "${unclosed.ch}" в позиции ${unclosed.col}`
        });
    }

    return errors;
}

//на ошибки теги
let htmlTags = new Set();

async function loadHtmlTags() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/Sasha731-pro/html-tags-data/refs/heads/main/tags.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
       // htmlTags = new Set(Object.keys(data));
       htmlTags = new Set(Object.keys(data).map(tag => tag.toLowerCase()));
       // console.log('HTML-теги загружены:', htmlTags.size);
       console.log('HTML-теги загружены:', Array.from(htmlTags));
    } catch (err) {
        console.error('Не удалось загрузить список HTML-тегов:', err);
        // fallback на минимальный набор тегов
        htmlTags = new Set([
            'html', 'head', 'body', 'div', 'span', 'h1', 'p', 'a', 'img'
        ]);
    }
}


function validateSelectors(cssCode) {
    let errors = [];
    let ast;
    try {
        ast = csstree.parse(cssCode, { positions: true });
    } catch (e) {
        // Синтаксические ошибки парсера
        let line = 0;
        if (e && e.parseError && e.parseError.line) {
            line = e.parseError.line;
        } else if (e && e.line) {
            line = e.line;
        }
        errors.push({ line, message: `Синтаксическая ошибка: ${e.message}` });
        return errors;
    }

    csstree.walk(ast, {
        visit: 'Rule',
        enter(node) {
            if (!node.prelude) return;
            // prelude — это селектор
            try {
                 // Обход уже распарсенного селектора в node.prelude
               // const selectorAst = csstree.parse(node.prelude.value, { context: 'selector' });
                //csstree.walk(selectorAst, {
                    csstree.walk(node.prelude, {
                    visit: 'TypeSelector',
                    enter(typeNode) {
                        const tagName = typeNode.name.toLowerCase();
                        if (!htmlTags.has(tagName)) {
                            let line = 0;
                            if (typeNode.loc && typeNode.loc.start) {
                                line = typeNode.loc.start.line;
                            }
                            errors.push({
                                line,
                                message: `Неизвестный HTML-тег в селекторе: "${tagName}"`
                            });
                        }
                    }
                });
            } catch (e) {
                // Ошибка в селекторе (тег html)
                let line = 0;
                if (node.loc && node.loc.start) {
                    line = node.loc.start.line;
                }
                errors.push({ line, message: `Ошибка в селекторе: ${e.message}` });
            }
        }
    });

    return errors;
}

//для ошибок html в поле ввода кода для html
function validateHtmlTags(html1) {
    const errors = [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(html1, 'text/html');
    const allElements = doc.body.getElementsByTagName('*');

    // Получаем строки из исходного HTML-кода
    const lines = html1.split('\n');

    for (let el of allElements) {
        const tagName = el.tagName.toLowerCase();
        if (!htmlTags.has(tagName)) {
            // Поиск строки, где находится тег
            let line = -1;
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].includes(`<${tagName}`) || lines[i].includes(`</${tagName}`)) {
                    line = i + 1; // +1 для корректного отображения строки
                    break;
                }
            }
            if (line !== -1) {
                errors.push({
                    line,
                    message: `Неизвестный HTML-тег: "${tagName}"`
                });
            } else {
                // Если не удалось найти строку, можно добавить дополнительное сообщение
                errors.push({
                    line: -1,
                    message: `Неизвестный HTML-тег: "${tagName}", не удалось определить строку.`
                });
            }
        }
    }
    return errors;
}


// Функция для извлечения всех id из HTML-кода
function extractIdsFromHtml(html) {
    const ids = new Set();
    // Создаем временный DOM для парсинга
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const allElements = doc.querySelectorAll('[id]');
    allElements.forEach(el => {
        ids.add(el.id);
    });
    return ids;
}

// Функция проверки id-селекторов в CSS
function validateCssIds(cssCode, htmlIds) {
    const errors = [];
    let ast;
    try {
        ast = csstree.parse(cssCode, { positions: true });
    } catch (e) {
        // Если синтаксическая ошибка, возвращаем пустой массив — её уже обрабатываем отдельно
        return errors;
    }

    csstree.walk(ast, {
        visit: 'Selector',
        enter(node) {
            node.children.forEach(child => {
                if (child.type === 'IdSelector') {
                    const idName = child.name;
                    if (!htmlIds.has(idName)) {
                        let line = 0;
                        if (child.loc && child.loc.start) {
                            line = child.loc.start.line;
                        }
                        errors.push({
                            line,
                            message: `В CSS используется id "#${idName}", которого нет в HTML`
                        });
                    }
                }
            });
        }
    });

    return errors;
}

// Подсветка строки с ошибкой
function highlightErrorLine1(line) {
    clearErrorHighlight();
    const lineIndex = line - 1; // Индексация с 0
    if (lineIndex >= 0 && lineIndex < htmlEditor1.lineCount()) {
        const lineHandle = htmlEditor1.getLineHandle(lineIndex);
        if (lineHandle) {
            htmlEditor1.addLineClass(lineHandle, 'background', 'error-line');
        }
    }

}

function highlightErrorLine2(line) {
    clearErrorHighlight2();
    const lineIndex = line - 1; // Индексация с 0
    if (lineIndex >= 0 && lineIndex < cssEditor1.lineCount()) {
        const lineHandle = cssEditor1.getLineHandle(lineIndex);
        if (lineHandle) {
            cssEditor1.addLineClass(lineHandle, 'background', 'error-line');
        }
    }

}

function highlightErrorLine3(line) {
    clearErrorHighlight3();
    const lineIndex = line - 1; // Индексация с 0
    if (lineIndex >= 0 && lineIndex < jsEditor1.lineCount()) {
        const lineHandle = jsEditor1.getLineHandle(lineIndex);
        if (lineHandle) {
            jsEditor1.addLineClass(lineHandle, 'background', 'error-line');
        }
    }

}

// Функция для очистки подсветки ошибок
function clearErrorHighlight1() {
    const totalLines = htmlEditor1.lineCount();
    for (let i = 0; i < totalLines; i++) {
        htmlEditor1.removeLineClass(i, 'background', 'error-line');
    }
}

function clearErrorHighlight2() {
    const totalLines = cssEditor1.lineCount();
    for (let i = 0; i < totalLines; i++) {
        cssEditor1.removeLineClass(i, 'background', 'error-line');
    }
}

function clearErrorHighlight3() {
    const totalLines = jsEditor1.lineCount();
    for (let i = 0; i < totalLines; i++) {
        jsEditor1.removeLineClass(i, 'background', 'error-line');
    }
}

//код для кнопки запуска BOOTSTRAP
// Код для кнопки "Показать результат" в Bootstrap
document.getElementById('showResultBtn').addEventListener('click', async function() {
    clearErrorHighlight1();
    clearErrorHighlight2();
    clearErrorHighlight3();
    // Ждём загрузки htmlTags, если ещё не загружены
    if (htmlTags.size === 0) {
        await loadHtmlTags();
    }
    
    // Ждём, пока список CSS-свойств загрузится (если ещё не загрузился)
    if (validCssProperties.size === 0) {
        await loadCssProperties();
    }

    const html1 = htmlEditor1.getValue();
    const cssCode = cssEditor1.getValue();
    const css1 = `<style>${cssCode}</style>`;
    const js1 = jsEditor1.getValue();

    // Проверка ошибок Bootstrap
    const errors = checkBootstrapClasses(html1);
    if (errors.length > 0) {
        let errorMsg = "Ошибки Bootstrap:\n";
        errors.forEach(err => {
            errorMsg += `Строка ${err.line}: ${err.message}\n`;
            highlightErrorLine1(err.line); 
            updateOutput(); // Обновляем вывод
        });
        alert(errorMsg);
        return; // Прекратить выполнение, если есть ошибки
    }

    // Проверка селекторов (тег html) в поле для html
    const htmlErrors = validateHtmlTags(html1);
    if (htmlErrors.length > 0) {
        let errorMsg = "Ошибки в HTML:\n";
        htmlErrors.forEach(err => {
            errorMsg += `Строка ${err.line}: ${err.message}\n`;
            highlightErrorLine1(err.line); 
            updateOutput(); // Обновляем вывод
        });
        alert(errorMsg);        
        return; // Прекратить выполнение, если есть ошибки
    }

    //проверка ошибок в css
    try {
        csstree.parse(cssCode, { positions: true });
    } catch (e) {
        console.error("Ошибка парсера CSS:", e);
        let line = 0;
        if (e && e.parseError && e.parseError.line) {
            line = e.parseError.line;
        } else if (e && e.line) {
            line = e.line;
        } else if (e && e.location && e.location.start && e.location.start.line) {
            line = e.location.start.line;
            
        }
        
        // highlightErrorLine2(line); 
        // updateOutput(); // Обновляем вывод
        alert(`Ошибка в CSS: ${e.message}\nСтрока: ${line}`);
        // setTimeout(() => {
        //     highlightErrorLine2(line);
        //     updateOutput();
        // }, 0);
        return;
    }

    // Проверка баланса скобок
    const bracketErrors = checkBracketsBalance(cssCode);
        if (bracketErrors.length > 0) {
            let errorMsg = "Ошибки в скобках CSS:\n";
            bracketErrors.forEach(err => {
                errorMsg += `Строка ${err.line}: ${err.message}\n`;
                highlightErrorLine2(err.line);
                updateOutput();
            });
            alert(errorMsg);
            return;
    }

    // Проверка селекторов (тег html) в поле для css
    const selectorErrors = validateSelectors(cssCode);
    if (selectorErrors.length > 0) {
        let errorMsg = "Ошибки в селекторах CSS:\n";
        selectorErrors.forEach(err => {
            errorMsg += `Строка ${err.line}: ${err.message}\n`;
            highlightErrorLine2(err.line);
            updateOutput();
        });
        alert(errorMsg);
        return;
    }

    // Проверка валидности свойств
    const propertyErrors = validateCssProperties(cssCode);
    if (propertyErrors.length > 0) {
        let errorMsg = "Ошибки CSS-свойств:\n";
        propertyErrors.forEach(err => {
            errorMsg += `Строка ${err.line}: ${err.message}\n`;
            highlightErrorLine2(err.line);
            updateOutput();
        });
        alert(errorMsg);
        return;
    }

    // Проверка id-селекторов в CSS
    const htmlIds = extractIdsFromHtml(html1);
    const idErrors = validateCssIds(cssCode, htmlIds);
    if (idErrors.length > 0) {
        let errorMsg = "Ошибки в id в CSS:\n";
        idErrors.forEach(err => {
            errorMsg += `Строка ${err.line}: ${err.message}\n`;
            highlightErrorLine2(err.line);
            updateOutput();
        });
        alert(errorMsg);
        return;
    }

    try {
        esprima.parseScript(js1, { tolerant: true });
    } catch (e) {
        alert(`Ошибка в JavaScript: ${e.description}\nСтрока: ${e.lineNumber}`);
        highlightErrorLine3(e.lineNumber);
        updateOutput();
        return;
    }

    const output = document.getElementById('output'); //output - ОКНО РЕЗУЛЬТАТА
    const outputDocument = output.contentDocument || output.contentWindow.document;

    // Очищаем содержимое iframe
    outputDocument.open();
    // outputDocument.write(bootCode); // Вставляем только Bootstrap код
    outputDocument.write(`
        
        <link href="${bootstrapCssUrl}" rel="stylesheet">
        ${html1 + css1}
         
    `); // Вставляем Bootstrap CSS и код
    outputDocument.close();


      // Создаем новый script элемент для JavaScript
      const script1 = outputDocument.createElement('script');
      script1.textContent = js1; // Вставляем JavaScript код
      outputDocument.body.appendChild(script1); // Добавляем скрипт в body
});


//кнопка запука первой страницы с обычным html
document.getElementById('run').addEventListener('click', async function() {
    // Ждём загрузки htmlTags, если ещё не загружены
    if (htmlTags.size === 0) {
        await loadHtmlTags();
    }
    
    // Ждём, пока список CSS-свойств загрузится (если ещё не загрузился)
    if (validCssProperties.size === 0) {
        await loadCssProperties();
    }

    const html1 = htmlEditor.getValue();
    const cssCode = cssEditor.getValue();
    const css1 = `<style>${cssCode}</style>`;
    // const css = `<style>${cssEditor.getValue()}</style>`;
    const js1 = jsEditor2.getValue();

    // Проверка селекторов (тег html) в поле для html
     const htmlErrors = validateHtmlTags(html1);
    if (htmlErrors.length > 0) {
        let errorMsg = "Ошибки в HTML:\n";
        htmlErrors.forEach(err => {
            errorMsg += `Строка ${err.line}: ${err.message}\n`;
        });
        alert(errorMsg);
        return; // Прекратить выполнение, если есть ошибки
    }

    //проверка ошибок в css
    try {
        csstree.parse(cssCode, { positions: true });
    } catch (e) {
        console.error("Ошибка парсера CSS:", e);
        let line = 0;
        if (e && e.parseError && e.parseError.line) {
            line = e.parseError.line;
        } else if (e && e.line) {
            line = e.line;
        } else if (e && e.location && e.location.start && e.location.start.line) {
            line = e.location.start.line;
        }
        alert(`Ошибка в CSS: ${e.message}\nСтрока: ${line}`);
        return;
    }

    // Проверка баланса скобок
    const bracketErrors = checkBracketsBalance(cssCode);
        if (bracketErrors.length > 0) {
            let errorMsg = "Ошибки в скобках CSS:\n";
            bracketErrors.forEach(err => {
                errorMsg += `Строка ${err.line}: ${err.message}\n`;
            });
            alert(errorMsg);
            return;
    }

    // Проверка селекторов (тег html) в поле для css
    const selectorErrors = validateSelectors(cssCode);
    if (selectorErrors.length > 0) {
        let errorMsg = "Ошибки в селекторах CSS:\n";
        selectorErrors.forEach(err => {
            errorMsg += `Строка ${err.line}: ${err.message}\n`;
        });
        alert(errorMsg);
        return;
    }

    // Проверка валидности свойств
    const propertyErrors = validateCssProperties(cssCode);
    if (propertyErrors.length > 0) {
        let errorMsg = "Ошибки CSS-свойств:\n";
        propertyErrors.forEach(err => {
            errorMsg += `Строка ${err.line}: ${err.message}\n`;
        });
        alert(errorMsg);
        return;
    }

    // Проверка id-селекторов в CSS
    const htmlIds = extractIdsFromHtml(html1);
    const idErrors = validateCssIds(cssCode, htmlIds);
    if (idErrors.length > 0) {
        let errorMsg = "Ошибки в id в CSS:\n";
        idErrors.forEach(err => {
            errorMsg += `Строка ${err.line}: ${err.message}\n`;
        });
        alert(errorMsg);
        return;
    }

    try {
        esprima.parseScript(js1, { tolerant: true });
    } catch (e) {
        alert(`Ошибка в JavaScript: ${e.description}\nСтрока: ${e.lineNumber}`);
        return;
    }

    const output = document.getElementById('output');
    const outputDocument = output.contentDocument || output.contentWindow.document;

    // Очищаем содержимое iframe
    outputDocument.open();
    outputDocument.write(html1 + css1); // Вставляем HTML и CSS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    outputDocument.close();

    // Создаем новый script элемент для JavaScript
    const script = outputDocument.createElement('script');
    script.textContent = js1; // Вставляем JavaScript код
    outputDocument.body.appendChild(script); // Добавляем скрипт в body
});

//работа кнопки Запустить с JS
document.getElementById('run').addEventListener('click', function() {
    const jsCode = document.getElementById('jsCode2').value;
    // const jsCode = jsEditor2.getValue();
    // const js = jsEditor.getValue();

    const outputDiv = document.getElementById('output');
    const resultDiv = document.getElementById('output');
    // Очищаем предыдущий вывод
    outputDiv.innerHTML = '';
    resultDiv.innerHTML = '';
    // Создаем функцию для обработки вывода
    const log = (message) => {
    outputDiv.innerHTML += message + '<br>';
    };
    // Используем new Function для выполнения кода
    try {
        // Перенаправляем console.log
        const originalLog = console.log; // Сохраняем оригинальный console.log
        console.log = log; // Перенаправляем console.log на нашу функцию

        // Выполняем код
        const output1 = new Function('return (' + jsCode + ')')();

        // Восстанавливаем оригинальный console.log
        console.log = originalLog;

        // Выводим результат
        if (output1 !== undefined) {
            resultDiv.textContent = 'Результат: ' + output1;
        }
    } catch (error) {
        outputDiv.textContent = 'Ошибка: ' + error.message;
    }
});



// Код для кнопки jQuery
document.getElementById('runjQButton').addEventListener('click', function() {
    // const bootCode = document.getElementById('bootCode').value;
    // const bootCode = bootEditor.getValue(); //ВМЕСТО ЭТОГО ДОЛЖНО БЫТЬ ОТДЕЛЬНО HTML И CSS, JS (ПО ВОЗМОЖНОСТИ)
    

    const html = htmlEditor.getValue();
    const css = `<style>${cssEditor.getValue()}</style>`;
    const js2 = jquEditor.getValue();
    const output = document.getElementById('output'); //output - ОКНО РЕЗУЛЬТАТА

    const outputDocument = output.contentDocument || output.contentWindow.document;

    // Вставляем введенный HTML-код в результат
    // output.innerHTML = bootCode;

    // Очищаем содержимое iframe
    outputDocument.open();
    // outputDocument.write(bootCode); // Вставляем только Bootstrap код
    outputDocument.write(`
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        ${html + css}
    `); // Вставляем Bootstrap CSS и код
    outputDocument.close();

    // Обработка сообщений от sandbox
    // window.addEventListener('message', function(event) {
    //     // Для безопасности можно проверить origin, если sandbox3.html на том же домене
    //     if (event.source !== iframe.contentWindow) return;

    //     if (event.data.type === 'error') {
    //         alert(`Ошибка:\n${event.data.message}\n\nСтек вызовов:\n${event.data.stack}`);
    //     } else if (event.data.type === 'result') {
    //         console.log('Результат:', event.data.message);
    //     }
    // });

     // Скрипт для ловли ошибок
    const errorCatcherScript = `
      window.onerror = function(message, source, lineno, colno, error) {
        window.parent.postMessage({
          type: 'jq-error',
          message: message,
          source: source,
          line: lineno,
          column: colno,
          error: error ? error.stack : null
        }, '*');
        return false;
      };
    `;

    // Вставляем скрипт ловли ошибок
    const scriptErrorCatcher = outputDocument.createElement('script');
    scriptErrorCatcher.textContent = errorCatcherScript;
    outputDocument.body.appendChild(scriptErrorCatcher);

      // Создаем новый script элемент для jQuery
    const script2 = outputDocument.createElement('script');
    script2.textContent = js2; // Вставляем jQuery код
    outputDocument.body.appendChild(script2); // Добавляем скрипт в body

   // iframe.contentWindow.postMessage({ code: js2 }, '*');

    
});

//код для кнопки запуска Vue
// Код для кнопки Vue
document.getElementById('runVueButton').addEventListener('click', function() {
    const html = htmlEditor.getValue();
    const css = `<style>${cssEditor.getValue()}</style>`;
    //const js2 = jsEditor2.getValue();
    const js3 = vueEditor.getValue();
    const js4 = JSONEditor.getValue();
    const output = document.getElementById('output'); //output - ОКНО РЕЗУЛЬТАТА

    const outputDocument = output.contentDocument || output.contentWindow.document;

    // Очищаем содержимое iframe <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js"></script>
    outputDocument.open();
    outputDocument.write(`
        <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js"></script>,
        <script src="https://cdn.jsdelivr.net/npm/vue-axios@3.5.2/dist/vue-axios.esm.min.js"></script>
        ${html + css}

    `); 
    outputDocument.close();

      // Создаем новый script элемент для Vue
    const script3 = outputDocument.createElement('script');
    script3.textContent = js3; // Вставляем Vue код
    outputDocument.body.appendChild(script3); 

    const script4 = outputDocument.createElement('script');
    script4.textContent = js4; // Вставляем Vue код
    outputDocument.body.appendChild(script4); 
});




document.getElementById('clear').addEventListener('click', function() {
    // document.getElementById('htmlCode').value = '';
    // document.getElementById('cssCode').value = '';
    // document.getElementById('jsCode').value = '';
    htmlEditor.setValue('');
    cssEditor.setValue('');
    jsEditor.setValue('');
    htmlEditor1.setValue('');
    cssEditor1.setValue('');
    jsEditor1.setValue('');
    jsEditor2.setValue('');
    jquEditor.setValue('');
    vueEditor.setValue('');
    // bootEditor.setValue('');
    // document.getElementById('bootCode').value = '';
    
    // Очищаем результат в iframe
    const output = document.getElementById('output');
    // const resultDiv = document.getElementById('output1');
    const outputDocument = output.contentDocument || output.contentWindow.document;
    outputDocument.open();
    outputDocument.write('');
    outputDocument.close();

    // Очищаем области вывода и результата
    // document.getElementById('output1').innerHTML = '';
     document.getElementById('output').innerHTML = '';
    //  document.getElementById('output2').innerHTML = '';
    document.getElementById('result').innerHTML = '';
    // Очищаем текстовое поле
    document.getElementById('code').value = '';
});



//попытка сделать регистрацию
// Ваши функции для регистрации и входа
// function showRegister() {
//     document.getElementById('registerForm').style.display = 'block';
//     document.getElementById('loginForm').style.display = 'none';
// }

// // Показать форму входа
// function showLogin() {
//     document.getElementById('registerForm').style.display = 'none';
//     document.getElementById('loginForm').style.display = 'block';
// }

// // Регистрация
// async function register() {
//     const username = document.getElementById('registerUsername').value;
//     const email = document.getElementById('registerEmail').value;
//     const password = document.getElementById('registerPassword').value;

//     const res = await fetch('http://localhost:3000/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, email, password }),
//     });

//     if (res.ok) {
//         alert('Регистрация успешна');
//     } else {
//         const error = await res.text();
//         alert('Ошибка регистрации: ' + error);
//     }
// }

// // Вход
// async function login() {
//     const email = document.getElementById('loginEmail').value;
//     const password = document.getElementById('loginPassword').value;

//     const res = await fetch('http://localhost:3000/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//     });

//     if (res.ok) {
//         const data = await res.json();
//         localStorage.setItem('token', data.token);
//         alert('Вход успешен');
//         showEditor(); // Показать тренажер после успешного входа
//     } else {
//         const error = await res.text();
//         alert('Ошибка входа: ' + error);
//     }
// }

// // Показать тренажер
// function showEditor() {
//     document.getElementById('authForms').style.display = 'none';
//     document.getElementById('editor-container').style.display = 'flex';
// }

// // Изначально показываем форму регистрации
// showRegister();
