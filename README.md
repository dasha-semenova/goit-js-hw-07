<blockquote>goit-js-hw-07</blockquote>

<h1>Завдання 1</h1>
<p>
    З використанням властивостей і методів DOM-елементів, напиши скрипт, який:<br>
    Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.<br>
    Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу &lth2&gt) і кількість елементів у категорії (усіх &ltli&gt, вкладених у нього).
</p>

<h1>Завдання 2</h1>
<p> Напиши скрипт для створення галереї зображень на основі масиву даних. HTML містить список ul.gallery.</p><br>    
    <pre><code>
    &lt;ul class="gallery"&gt;&lt;/ul&gt;
    </code></pre>
<p> Використовуй масив об'єктів images для створення елементів &ltimg&gt, вкладених в &ltli&gt.<br>
    Ти можеш створити й додати HTML-елементи, використовуючи document.createElement() і elem.append() або шаблонні рядки і elem.insertAdjacentHTML().<br>
    Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.<br>
    Додай мінімальне оформлення галереї флексбоксами через CSS класи.

</p>

<h1>Завдання 3</h1>
<p>Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".</p><br>
<pre><code>
    &ltinput type="text" id="name-input" placeholder="Please enter your name" /&gt
    &lth1&gtHello, &ltspan&gt id="name-output"&gtAnonymous&lt/span&gt!&lt/h1&gt
</code></pre>

<h1>Завдання 4</h1>
<p>Напиши скрипт управління формою логіна.</p>
<pre><code>
        &ltform class="login-form"&gt
          &ltlabel&gt
            Email
            &ltinput type="email" name="email" /&gt
          &lt/label&gt
          &ltlabel&gt
            Password
            &ltinput type="password" name="password" /&gt
          &lt/label>
          &ltbutton type="submit"&gtLog in&lt/button&gt
        &lt/form&gt
</code></pre>

<p>відправлення форми form.login-form повинна відбуватися за подією submit.</p>
<ul>
    <li>Під час відправлення форми сторінка не повинна перезавантажуватися.</li>
  <li>Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'.</li>
  <li>Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.</li>
  <li>Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.</li>
  <li>При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.</li>
</ul>

<h1>Завдання 5</h1>
<p>Напиши скрипт, який змінює колір фону елемента &ltbody&gt через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.</p>
<pre>
  <code>
    &ltdiv class="widget">
      &ltp&gtBackground color: &ltspan class="color"&gt-&lt/span&gt&lt/p&gt
      &ltbutton type="button" class="change-color"&gtChange color&lt/button&gt
    &lt/div&gt
  </code>
</pre>
<p>Для генерування випадкового кольору використовуй функцію getRandomHexColor().</p>
<pre>
  <code>
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }
  </code>  
</pre>
<p>Зверни увагу, що функція getRandomHexColor() повертає колір у hex-форматі, в той час, як колір фону на &ltbody&gt буде у форматі rgb. Це нормально й не потребує якихось правок.</p>
