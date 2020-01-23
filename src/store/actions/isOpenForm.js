import { IS_OPEN_FORM_FALSE, IS_OPEN_FORM_TRUE } from "@/constants"

export const isOpenFormFalse = () => ({
  type: IS_OPEN_FORM_FALSE,
  payload: false
});

export const isOpenFormTrue = () => ({
  type: IS_OPEN_FORM_TRUE,
  payload: true
});
