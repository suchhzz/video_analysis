import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface VideoState {
  uploaded: string[]
}

const initialState: VideoState = {
  uploaded: [],
}

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    addVideo: (state, action: PayloadAction<string>) => {
      state.uploaded.push(action.payload)
    },
  },
})

export const { addVideo } = videoSlice.actions
export default videoSlice.reducer
