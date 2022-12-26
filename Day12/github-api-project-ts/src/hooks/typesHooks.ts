import { useState } from "react";

const useString = (initialValue: string) => useState<string>(initialValue);
export type UseStringValue = ReturnType<typeof useString>[0];
export type UseStringSetValue = ReturnType<typeof useString>[1];
