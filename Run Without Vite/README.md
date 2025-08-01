Setup project using VITE

Vite is tool used to create a react project
Vite provides server by default (A Server puts our website at a URL)
Vite also helps us "build" the website

COMMAND:
npx create-vite
npm run dev


Routing

npm install react-router


Date Formating

dayjs

dayjs(time string in millisecond).format('ddd, MMMM, D')


Testing: 

To run: npx vitest

Unit testing
npm install --save-dev vitest 

vitest will work with vite project very well, we can also Jest for testing

--save-dev only for development

for Integration testing for components

npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom vitest


npm install --save-dev @testing-library/react @testing-library/dom



npm uninstall @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom vitest jest @types/jest 

npm install --save-dev vitest jsdom jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest
