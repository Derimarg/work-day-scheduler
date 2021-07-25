# work-day-scheduler
>  link web page  : https://derimarg.github.io/work-day-scheduler/

## Description

A day scheluder application that allows a user to save events and organize their day.

### Features

- This workday scheduler will display hour of the day from 9 AM to 5 PM.
- At the top of the scheduler will be displayed the current day.
    ```html
    Example: 
                Thursday, Jul 22nd 2021
    ```

    > If you would like to have a diferent format, follow the next steps:

    ```html
    Step 1: Download and copy the repository. (if you don't know how to do this, check down below the instruction of Download and Instalation).

    Step 2: Open the file script.js at the folder js.

    Step 3: At the top of the page, you will see the following line of code.

        /* Variable that give the format to current day displayed */
        var currentDay = moment().format('dddd, MMM Do YYYY');

    Step 4: Change the value of [moment().format()] for one of the following options.

    moment().format('MMMM Do YYYY, h:mm:ss a'); // July 22nd 2021, 11:50:55 pm
    moment().format('dddd');                    // Thursday
    moment().format("MMM Do YY");               // Jul 22nd 21
    moment().format('YYYY [escaped] YYYY');     // 2021 escaped 2021
    moment().format();                          // 2021-07-22T23:51:50-05:00

    Step 5: Save the changes, and open file index.html in the browser, then refresh, and you will see the formar that you choosed being displayed.
    ```
- Each block will change color, indicating you whether it occurs:
    - Past: Will change color gray.
    - Present: Will change color red.
    - Future: Will change color green.

- Every block will give you the ability of save text inputed.
- Once the text is saved, it will be stored in their local storage.
- Will be responsive to desktop and mobile diveces.

    Example:

![Project Demo](./resources/images/demo.gif)
---

### Table of Contents

- [Password Generator](#work-day-scheduler)
- [Description](#description)
- [Download](#how-to-download)
- [License](#license)
- [Author Info](#author-info)

---

#### Technologies
- HTML
- CSS
- JavaScript
- jQuery
- Font Awesome
- Bootstrap

[Back To The Top](#work-day-scheduler)

---

>## How To Download

- Simply copy the **SSH** to the terminal or Download the **ZIP File**:

>## Installation

 Use the follow command at your terminal, **git clone** (Create a working copy of a local repository):

```html
git clone git@github.com:Derimarg/work-day-scheduler.git
```

After cloned the repository, create your own repository, copy the files to your repository and type in your terminal the follow commands. 

```html
git status

git add -A

git commit -m "Message to commit."

git push or git push origin main
```

[Back To The Top](#work-day-scheduler)

---

## License

MIT License

Copyright (c) 2021 Derimar Gray

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Back To The Top](#work-day-scheduler)

---

## Author Info

- GitHub - [Derimar Gray](https://github.com/Derimarg)

[Back To The Top](#work-day-scheduler)
