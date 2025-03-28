import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../api/auth";

// User type
export type User = {
  user_id: number;
  email: string;
  display_name: string;
  token: string;
};

// Auth slice state
type AuthState = {
  user: User | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

// Async login action
export const login = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await loginUser(credentials);
      return response;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.error || "Login failed");
    }
  }
);

// Async register action
export const register = createAsyncThunk(
  "auth/register",
  async (userData: { email: string; password: string; display_name: string }, thunkAPI) => {
    try {
      const response = await registerUser(userData);
      return response;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.error || "Registration failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Clear user data and remove token
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
      state.error = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      // Login flow
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Register flow
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
