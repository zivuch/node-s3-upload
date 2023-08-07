import { useState } from "react";
import axios from "axios";
import { Button, Stack, Grid, Box } from "@mui/material";

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [fileData, setFileData] = useState(null);
  const [myUploads, setMyUploads] = useState([]);
  const [showInputFields, setShowInputFields] = useState(true);

  const deleteMyDog = async (username) => {
    setShowInputFields(true);
    try {
      const response = await axios.post("/delete-mydog", {
        username,
      });
      setFileData({});
    } catch (e) {
      console.log(e);
    }
  };

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post("/upload-single", formData);
      setFileData(res.data);
    } catch (e) {
      console.log(e.response.data.msg);
    }
  };

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "75vh" }}>
        {showInputFields ? (
          <div>
            <Stack direction="column" alignItems="center" spacing={2}>
              <label htmlFor="contained-button-file">
                <input
                  type="file"
                  name="file"
                  id="contained-button-file"
                  accept="*/*"
                  onChange={(e) => setFile(e.target.files[0])}
                  hidden
                />
                <Button variant="contained" component="span">
                  Choose File
                </Button>
              </label>
              <Button variant="contained" onClick={uploadFile}>
                Upload File
              </Button>
            </Stack>
          </div>
        ) : null}
        {fileData ? (
          <Box
            sx={{
              margin: "20px",
            }}>
            <a href={`${fileData[0].location}`} target="_blank">
              {fileData[0].originalname}
            </a>
          </Box>
        ) : null}
      </Grid>
    </>
  );
};

export default UploadFile;
