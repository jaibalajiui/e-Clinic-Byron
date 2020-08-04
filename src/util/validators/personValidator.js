import {body} from 'express-validator';

// eslint-disable-next-line max-len
export const createPersonValidator = [body('name').not().isEmpty().trim().escape()];

