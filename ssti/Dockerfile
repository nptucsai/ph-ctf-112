FROM python:3.9-slim

WORKDIR /
ARG FLAG
ARG FLAG_FILE
RUN echo $FLAG >> $FLAG_FILE

WORKDIR /app
COPY requirement.txt .
RUN pip3 install -r requirement.txt

COPY main.py .
ENTRYPOINT python3 main.py

RUN chmod 444 /$FLAG_FILE
RUN chmod -R 555 /app
