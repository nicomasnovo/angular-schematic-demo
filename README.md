# RUN LOCALLY

```bash
npm run build
npm link /path/to/project/folder
```

Go to your Angular project and run
`ng g mach-schematic:store`

and follow the prompt

# VARIABLES SCHEMATICS

<%var%>
format:

- dasherize(var)
- classify(var)
- camelize(var)
- decamelize(var)

# DEFAULT GENERATED SCHEMATICS DOCS

# Getting Started With Schematics ()

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
