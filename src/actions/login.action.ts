export interface LoginPayload {
  auth: boolean
}

export const LoginActions = {
  LOGIN: "[LOGIN] USER_LOGIN"
};

export const ALogin = (
  payload: LoginPayload
): { type: string; payload: LoginPayload } => ({
  type: LoginActions.LOGIN,
  payload
});
