# Step 1: Base Image
FROM node:20

# Step 2: Set working directory
WORKDIR /app

# Step 3: Install dependencies

COPY package*.json ./
RUN npm install

# Step 4: Copy all source code
COPY . . 


# Step 5: Expose the port
EXPOSE 4000

# Step 6: Command to run the app
CMD [ "npm","start" ]