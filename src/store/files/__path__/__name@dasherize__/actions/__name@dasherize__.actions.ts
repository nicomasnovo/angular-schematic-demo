import { createAction, props } from '@ngrx/store';
import { <%=classify(name)%>, <%=classify(name)%>Payload } from '@payments/models';
import { PaginationRequestParameters } from 'app/modules/shared/models';
import { <%=classify(name)%>Collection } from 'app/modules/system/modules/payments/models/<%=dasherize(name)%>/<%=dasherize(name)%>.model';

/** Get payment template list */
export const get<%=classify(name)%>List = createAction(
  '[<%=classify(name)%>List] Get <%=classify(name)%>List',
  props<{ parameters: PaginationRequestParameters }>(),
);
export const get<%=classify(name)%>ListSuccess = createAction(
  '[<%=classify(name)%> List] Get <%=classify(name)%>List SUCCESS',
  props<{ paymentTemplateCollection: <%=classify(name)%>Collection }>(),
);
export const get<%=classify(name)%>ListFailure = createAction(
  '[<%=classify(name)%> List] Get <%=classify(name)%>List ERROR',
  props<{ error: any }>(),
);

/** Create payment templates */
export const create<%=classify(name)%> = createAction(
  '[Create<%=classify(name)%>] Create <%=classify(name)%>',
  props<{ templatePayload: <%=classify(name)%>Payload }>(),
);
export const create<%=classify(name)%>Success = createAction(
  '[<%=classify(name)%>] Create <%=classify(name)%> SUCCESS',
  props<{ <%=camelize(name)%>: <%=classify(name)%> }>(),
);
export const create<%=classify(name)%>Error = createAction(
  '[<%=classify(name)%>] Create <%=classify(name)%> ERROR',
  props<{ error: any }>(),
);

/** Get payment template by ID */
export const get<%=classify(name)%>ById = createAction(
  '[<%=classify(name)%>] Get <%=classify(name)%> by ID',
  props<{ id: string }>(),
);
export const get<%=classify(name)%>ByIdSuccess = createAction(
  '[<%=classify(name)%>] Get <%=classify(name)%> by ID SUCCESS',
  props<{ <%=camelize(name)%>: <%=classify(name)%> }>(),
);

export const get<%=classify(name)%>ByIdError = createAction(
  '[<%=classify(name)%>] Get <%=classify(name)%> by ID ERROR',
  props<{ error: any }>(),
);
