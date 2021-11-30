import React, { useState } from 'react';
import { useBetween } from 'use-between';

const sharedState = () => {
    return {
		
	};
}

export const useSharedState = () => useBetween(sharedState);