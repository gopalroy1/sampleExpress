#!/bin/bash

URL="http://localhost:3000/hello"

for i in {1..100}
do
  (
    echo "Sending request $i..."
    
    RESPONSE=$(curl -s -w "\nHTTP_STATUS:%{http_code}" "$URL") # Get response body + HTTP status
    STATUS_CODE=$(echo "$RESPONSE" | grep -oP '(?<=HTTP_STATUS:)\d+')
    RESPONSE_BODY=$(echo "$RESPONSE" | sed 's/HTTP_STATUS:[0-9]\+//')

    if [ "$STATUS_CODE" -ne 200 ]; then
      echo "Request $i failed with status: $STATUS_CODE"
    else
      echo "Request $i succeeded with response: $RESPONSE_BODY"
    fi
  ) &
done

wait  # Wait for all parallel processes to complete
echo "All requests completed."
