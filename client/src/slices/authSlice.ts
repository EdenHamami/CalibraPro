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
  async (
    userData: { email: string; password: string; display_name: string },
    thunkAPI
  ) => {
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
    // Set user from localStorage when app loads
    setUserFromStorage(state, action: PayloadAction<{ user: User }>) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },

    // Clear user data and remove token + user from storage
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
      state.error = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      // Login flow
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<{ user: User; token: string }>) => {
          state.loading = false;
          const fullUser = { ...action.payload.user, token: action.payload.token };
          state.user = fullUser;
          state.isLoggedIn = true;
          localStorage.setItem("user", JSON.stringify(fullUser));
        }
      )
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Register flow
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<{ user: User; token: string }>) => {
          state.loading = false;
          const fullUser = { ...action.payload.user, token: action.payload.token };
          state.user = fullUser;
          state.isLoggedIn = true;
          localStorage.setItem("user", JSON.stringify(fullUser));
        }
      )
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, setUserFromStorage } = authSlice.actions;
export default authSlice.reducer;
