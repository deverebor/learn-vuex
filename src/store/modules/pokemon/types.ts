export interface RootState {
  version?: string;
}

export interface TabSystemState {
  STATE_TABS: any;
}
// state
export const STATE_TABS = "STATE_TABS";

// actions
export const ACT_CREATE_NEW_TAB = "ACT_CREATE_NEW_TAB";

// mutations
export const MUT_SET_TAB_INFO = "MUT_SET_TAB_INFO";
export const MUT_SET_TAB = "MUT_SET_TAB";
export const MUT_CHANGE_TAB = "MUT_CHANGE_TAB";
export const MUT_REMOVE_TAB = "MUT_REMOVE_TAB";
export const MUT_UNSET_TABS = "MUT_UNSET_TABS";

// namespace
export const NAMESPACE = "tabSystem/";
