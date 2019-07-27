.PHONY:

dev:
	yarn && \
	PORT=3003 NODE_PATH=src/ yarn watch