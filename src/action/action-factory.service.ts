import { Service } from 'justinject';
import { CreateActionService } from './create-action.service';
import { UpdateActionService } from './update-action.service';
import { PaginationActionService } from './pagination-action.service';
import { ReadActionService } from './read-action.service';
import { DeleteActionService } from './delete-action.service';

@Service()
export class ActionFactoryService {
    constructor(
        public create: CreateActionService,
        public update: UpdateActionService,
        public pagination: PaginationActionService,
        public read: ReadActionService,
        public deleteAct: DeleteActionService,
    ) { }

    public registerActions() {
        this.create.createAction();
        this.update.updateAction();
        this.pagination.paginationAction();
        this.read.readAction();
        this.deleteAct.deleteAction();
    }
}
