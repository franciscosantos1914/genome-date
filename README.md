<p align="center" text-size="8px"> ⚠️ **Warning**: the current `main` represents v1 pre-release version of the library.</p>


<p align="center">
  <b>genome-date</b> provides the most comprehensive, yet simple and consistent toolset
  <br>
  for manipulating <b>JavaScript dates</b> in <b>a browser</b> & <b>Node.js</b>.</b>
</p>

<div align="center">

[📖&nbsp; Documentation]()&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[🧑‍💻&nbsp; JavaScript Jobs](https://jobs.date-fns.org/)

</div>

<hr>

# It's like [Lodash](https://lodash.com) for dates

- It has [**200+ functions** for all occasions](https://genoma-date.org/docs/Getting-Started/).
- **Modular**: Pick what you need. Works with webpack, Browserify, or Rollup and also supports tree-shaking.
- **Native dates**: Uses existing native type. It doesn't extend core objects for safety's sake.
- **Immutable & Pure**: Built using pure functions and always returns a new date instance.
- **TypeScript & Flow**: Supports both Flow and TypeScript
- **I18n**: Dozens of locales. Include only what you need.
- [and many more benefits](https://date-fns.org/)

```js
import { compareAsc, format } from 'date-fns'

format(new Date(2014, 1, 11), 'yyyy-MM-dd')
//=> '2014-02-11'

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
]
dates.sort(compareAsc)
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]
```

The library is available as an [npm package]().
To install the package run:

```bash
npm install genome-date --save
# or with yarn
yarn add genome-date
```

## Docs

[See genome-date.org]() for more details, API,
and other docs.

<br />
<!-- END OF README-JOB SECTION -->

## License

