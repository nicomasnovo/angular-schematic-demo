import {
  apply,
  chain,
  MergeStrategy,
  mergeWith,
  Rule,
  SchematicsException,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';
import { join, normalize } from 'path';
import { getWorkspace } from '@schematics/angular/utility/workspace';
import { schemaOptions } from './schema';
import { classify, dasherize, camelize, underscore } from '@angular-devkit/core/src/utils/strings';
const stringUtils = {classify, dasherize, camelize, underscore };

export async function setupOptions(host: Tree, options: any): Promise<Tree> {
  const workspace = await getWorkspace(host);
  if (!options.project) {
    options.project = workspace.projects.keys().next().value;
  }
  const project = workspace.projects.get(options.project);
  if (!project) {
    throw new SchematicsException(`Invalid project name: ${options.project}`);
  }

  options.path = join(normalize(project.root), 'src');
  return host;
}
// You don't have to export the function as default. You can also have more than one rule factory
// per file.

export function nico(options: schemaOptions): Rule {
  options.path = options.path ? normalize(options.path) : options.path;
  const templateSource = apply(url('./files'), [
    template({
      ...stringUtils,
      ...options,
    }),
  ]);
  return chain([mergeWith(templateSource, MergeStrategy.Overwrite)])
}