import { createAction, props } from "@ngrx/store";
import { CRUDstate } from "./CRUD.state";
import { CRUD } from "src/app/models/CRUDoperation";

export const addData = createAction('addData',props<{add:CRUD}>())
export const editData = createAction('editData',props<{edit:CRUD}>())
export const deleteData = createAction('deleteData',props<{delete:CRUD}>())


