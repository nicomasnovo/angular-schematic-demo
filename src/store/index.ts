import {
  apply,
  chain,
  MergeStrategy,
  mergeWith,
  Rule,
  template,
  url
} from '@angular-devkit/schematics';
import { normalize } from 'path';
import { schemaOptions } from './schema';
import { classify, dasherize, camelize, underscore, decamelize } from '@angular-devkit/core/src/utils/strings';
const stringUtils = {classify, dasherize, camelize, underscore, decamelize};

export function store(options: schemaOptions): Rule {
  options.path = options.path ? normalize(options.path) : options.path;
  
  const templateSource = apply(url('./files'), [
    template({
      ...stringUtils,
      ...options,
    }),
  ]);

  return chain([mergeWith(templateSource, MergeStrategy.Overwrite)])
}