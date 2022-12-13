import rev from '../src/index.js';

test('revERSE', () => {
  expect(rev('hello')).toEqual('olleh');
});

test('revERSE222', () => {
  expect(rev('')).toEqual('');
});


// Матчеры
// toEqual ------ проверяет равенство по значению

// toBe ------ проверяет равенство по ссылке


// Хуки спецфункции запускются до или после тестов(с данными)
// deforeAll ---- запускается один раз перед всеми тестами
// deforeEach ---- запускается перед каждым тестом