# React-Testing

yarn create react-app . --template typescript

yarn test

test(name,fn,timeoutes)

--watch =>see all file no jast file changes
-collectCoverageFrom='src/component/\*_/_.{ts,tsx}'=====> don't show files k testing n't run in files

--collectCoverageFrom='!src/component/\*_/_.{types,stories,constants,test,spec}.{ts,tsx}'===========> ignore in tabel coverage show and n't need test for me

"coverage": "yarn test --coverage --watchAll --collectCoverageFrom='src/component/**/\*.{ts,tsx}' --collectCoverageFrom='!src/component/**/\*.{types,stories,constants,test,spec}.{ts,tsx}'"

<!-- Assertions -->

is jest dom global

<!-- query is method in testing library for find element singel ele-->

getBy  
 queryBy
findBy

<!--multiple element  -->

getAllBy
queryAllBy
findAllBy

<!-- getByRol -->

sematic element in html have rol
example button has button rol

<!-- name in role for label in form amd for textarea and  text contect button -->

<!-- getByRole -->

name
level
hidden
selected
checked

<!-- getbyText -->

have text node and text content

<!-- order query -->

role
labelText
placeholder
byText
displayValue
altText
ByTitle
testId

<!-- convenience api -->

click()
dbClick()
tripleClick()
hover()
onhover()

<!-- pointer api -->

pointer({keys:[mouseLeft]})
pointer({keys:[mouseLeft],[mouseRight]})

<!-- feshar dadan button and negah dashtan  -->

pointer({keys:[mouseLeft>]})

<!-- raha kardan button k ghablan feshar dadei -->

pointer({keys:[/mouseLeft]})

<!-- utility api -->
<!-- Keyboard Interactions -->

type()=>number and...
clear()=> for clear 1 ele k can editabel
await userEvent.clear(sereen.getByRol("))

selectOptions()
render(
<select>

 <option value="1">A</potion>
 </select>
 )
 await userEvent.selectOptions(sereen.getByRol(""),['',''])
 expect(sereen.getByRol("options",{name:"A}).selected).toBe(true)

deselectOptions()
render(
<select>

 <option value="1">A</potion>
  <option value="2">A</potion>
 </select>
 )
 await userEvent.selectOptions(sereen.getByRol(""),'2')
 expect(sereen.getByText('B').selected).toBe(false)

upload()

copy()
cut()
pase()
keyboard('foo)
keyboard({shife} A {/shift}) =>shift dowen A shift up

<!-- convenience  api -->

tab()

<!-- statick analysis testing -->
